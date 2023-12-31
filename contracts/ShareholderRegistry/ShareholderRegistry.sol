// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./ShareholderRegistrySnapshot.sol";
import { Roles } from "../extensions/Roles.sol";
import "../extensions/DAORoles.sol";
import "../extensions/HasRole.sol";

/**
 * @title ShareholderRegistry
 * @notice ShareholderRegistry provides an implementation of a registry system for
 * a) holding and distributing shares; and b) set the status of the holders.
 */
contract ShareholderRegistry is
    Initializable,
    ShareholderRegistrySnapshot,
    HasRole
{
    /**
     * @notice Initializes the ShareholderRegistry contract with the given token name, symbol, and DAO roles.
     * @param roles DAORoles struct containing DAO-specific roles.
     * @param name string value representing the name of the token.
     * @param symbol string value representing the symbol of the token.
     */
    function initialize(
        DAORoles roles,
        string memory name,
        string memory symbol
    ) public initializer {
        require(
            address(roles) != address(0),
            "ShareholderRegistry: 0x0 not allowed"
        );
        _initialize(name, symbol);
        _setRoles(roles);
    }

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    modifier zeroCheck(address address_) {
        require(address_ != address(0), "ShareholderRegistry: 0x0 not allowed");
        _;
    }

    /**
     * @notice Takes a snapshot of the current balances for all shareholders.
     * @dev Requires the sender to have the RESOLUTION_ROLE.
     * @return A uint256 containing the snapshot ID.
     */
    function snapshot()
        public
        virtual
        override
        onlyRole(Roles.RESOLUTION_ROLE)
        returns (uint256)
    {
        return _snapshot();
    }

    /**
     * @notice Sets the status for a given shareholder address.
     * @dev Requires the sender to have the RESOLUTION_ROLE.
     * @param status bytes32 value representing the status to be set.
     * @param account address to set the status for.
     */
    function setStatus(
        bytes32 status,
        address account
    ) public virtual onlyRole(Roles.RESOLUTION_ROLE) {
        _setStatus(status, account);
    }

    /**
     * @notice Sets the voting implementation for the registry.
     * @dev Requires the sender to have the OPERATOR_ROLE.
     * @param voting contract instance to set as the current voting contract.
     */
    function setVoting(
        IVoting voting
    )
        external
        virtual
        onlyRole(Roles.OPERATOR_ROLE)
        zeroCheck(address(voting))
    {
        _setVoting(voting);
    }

    /**
     * @notice Mints new shares and assigns them to the specified shareholder address.
     * @dev Requires the sender to have the RESOLUTION_ROLE.
     * @param account address of the shareholder to receive the minted shares.
     * @param amount uint256 value representing the number of shares to mint.
     */
    function mint(
        address account,
        uint256 amount
    ) public virtual onlyRole(Roles.RESOLUTION_ROLE) {
        _mint(account, amount);
    }

    /**
     * @notice Burn shares from the specified shareholder address.
     * @dev Requires the sender to have the RESOLUTION_ROLE.
     * @param account address of the shareholder whose shares are to be burned.
     * @param amount uint256 value representing the number of shares to burn.
     */
    function burn(
        address account,
        uint256 amount
    ) external virtual onlyRole(Roles.RESOLUTION_ROLE) {
        _burn(account, amount);
    }

    /**
     * @notice Batch transfers shares from the DAO to the specified recipients.
     * @dev Requires the sender to have the RESOLUTION_ROLE.
     * @param recipients address[] array containing the address recipients.
     */
    function batchTransferFromDAO(
        address[] memory recipients
    ) public virtual onlyRole(Roles.RESOLUTION_ROLE) {
        super._batchTransferFromDAO(recipients);
    }

    /**
     * @notice Transfers shares from one shareholder to another.
     * @dev Requires the sender to have the RESOLUTION_ROLE.
     * @param from address of the shareholder to transfer shares from.
     * @param to address of the shareholder to transfer shares to.
     * @param amount uint256 value representing the number of shares to transfer.
     * @return true if successful, false otherwise.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override onlyRole(Roles.RESOLUTION_ROLE) returns (bool) {
        _transfer(from, to, amount);
        return true;
    }

    /**
     * @notice Transfers shares to the specified recipient.
     * @dev Requires the sender to have the RESOLUTION_ROLE.
     * @param to address of the recipient to transfer shares to.
     * @param amount uint256 value representing the number of shares to transfer.
     * @return true if successful, false otherwise.
     */
    function transfer(
        address to,
        uint256 amount
    ) public virtual override onlyRole(Roles.RESOLUTION_ROLE) returns (bool) {
        return super.transfer(to, amount);
    }
}
