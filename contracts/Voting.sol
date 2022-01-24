// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./IShareholderRegistry.sol";

// Make sure votes transferred to a non contributor do not take part to voting power

contract Voting {
  IShareholderRegistry _shareholderRegistry;
  IERC20 _token;

  bytes32 private _contributorRole;

  mapping(address => address) _delegates;
  mapping(address => uint256) _votes;
  mapping(address => uint256) _delegators;

  modifier onlyToken() {
    require(msg.sender == address(_token), "Only token can call this method");
    _;
  }

  function setToken(IERC20 token) external {
    _token = token;
  }

  function setShareholderRegistry(IShareholderRegistry shareholderRegistry)
    external
  {
    _shareholderRegistry = shareholderRegistry;
    _contributorRole = _shareholderRegistry.CONTRIBUTOR_STATUS();
  }

  function balanceOf(address account) public view returns (uint256) {
    return _token.balanceOf(account);
  }

  function afterTokenTransfer(
    address from,
    address to,
    uint256 amount
  ) external onlyToken {
    _moveVotingPower(getDelegate(from), getDelegate(to), amount);
  }

  function getDelegate(address account) public view returns (address) {
    return _delegates[account];
  }

  function getVotes(address account) public view returns (uint256) {
    return _votes[account];
  }

  function delegate(address newDelegate) public {
    require(
      _shareholderRegistry.isAtLeast(_contributorRole, msg.sender),
      "Voting: only contributors can delegate."
    );
    require(
      _shareholderRegistry.isAtLeast(_contributorRole, newDelegate),
      "Voting: only contributors can be delegated."
    );
    _delegate(msg.sender, newDelegate);
  }

  function _delegate(address delegator, address newDelegate) internal {
    address currentDelegate = getDelegate(delegator);
    if (currentDelegate == address(0)) {
      require(newDelegate == delegator, "Voting: first delegate yourself");
    }

    require(
      currentDelegate != newDelegate,
      "Voting: the proposed delegate is already your delegate."
    );

    address currentDelegateeDelegate = getDelegate(newDelegate);
    require(
      currentDelegateeDelegate == newDelegate ||
        currentDelegateeDelegate == address(0) ||
        newDelegate == delegator,
      "Voting: the proposed delegatee has itself a delegate. No sub-delegations allowed."
    );

    require(
      _delegators[delegator] <= 1,
      "Voting: the delegator is delegated. No sub-delegations allowed."
    );

    _beforeDelegate(delegator, newDelegate);

    uint256 delegatorBalance = balanceOf(delegator);
    _delegates[delegator] = newDelegate;
    _delegators[newDelegate] = _delegators[newDelegate] + 1;
    _delegators[currentDelegate] = _delegators[newDelegate] - 1;

    //emit DelegateChanged(delegator, currentDelegate, delegatee);

    _moveVotingPower(currentDelegate, newDelegate, delegatorBalance);
  }

  function _moveVotingPower(
    address from,
    address to,
    uint256 amount
  ) private {
    if (from != to && amount > 0) {
      if (from != address(0)) {
        uint256 oldVotes = _votes[from];
        _votes[from] = oldVotes - amount;
        //emit DelegateVotesChanged(src, oldVotes, _votes[src]);
      }

      if (to != address(0)) {
        uint256 oldVotes = _votes[to];
        _votes[to] = oldVotes + amount;
        //emit DelegateVotesChanged(dst, oldVotes, _votes[dst]);
      }
    }
  }

  function _beforeDelegate(address delegator, address delegated)
    internal
    virtual
  {}
}
