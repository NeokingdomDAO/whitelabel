---
header-includes:
  - \usepackage{setspace}
  - \setstretch{1.25}
  - \usepackage{xcolor}
  - \usepackage{sectsty}
  - \usepackage{titlesec}
---

# NEOKingdom DAO Yellow Paper

## Introduction

NEOKingdom DAO aims to lead by example and revolutionize the traditional company structures. We are advocating for a new type of technology empowered organizations that are truly owned by their contributors: DAOcracies. By leveraging blockchain technology, we are building entities that value and reward the efforts of those who contribute to their growth and success, fostering a sense of purpose and belonging.

At NEOKingdom DAO, we are developing the legal and technical framework (hereinafter: Framework) required to create and manage these elevated organizations, which we call "neokingdoms." A neokingdom is a DAO wrapped into a limited liability company incorporated in Estonia, that uses our tested out custom Articles of Association, Shareholders' Agreement, and blockchain based technical solution for governance. All members of a DAO (hereinafter: Users) are also the shareholders of a respective underlying private limited company.

The Framework is first developed and then deployed at NEOKingdom DAO and then offered to neokingdoms with individualized modifications. The Framework is built on the Ethereum Virtual Machine (EVM) and is legally compliant. Within the Framework, Users can vote and interact with NEOkingdom DAO or any of the neokingdoms by using the progressive web app developed by NEOKingdom DAO.

To ensure the effectiveness of the proposed Framework, we have adopted a "dogfooding" approach by testing it on ourselves. On July 27th, 2022, the founders of NEOKingdom DAO transformed their existing brick-and-mortar company, teledisko GmbH, into the first neokingdom. We have been using this experience to refine the Framework to better address challenges and make the Framework available to every type of business in the future.

Currently, there are two active companies using the Framework: [teledisko DAO OÜ](https://ariregister.rik.ee/eng/company/16374990/teledisko-DAO-O%C3%9C), launched on July 27th, 2022 as a pilot project of the concept, and [NEOKingdom DAO OÜ](https://ariregister.rik.ee/eng/company/16638166/Neokingdom-DAO-O%C3%9C), launched in December 2022. There are 3-5 other companies in the pipeline to join the Framework as neokingdoms in 2023.

## User types in NEOKingdom DAO

The Framework has four primary types of users, each with different roles and access levels. This diverse user base allows for an inclusive and thriving ecosystem that supports the growth and success of a DAO.

User types are divided between two major groups: KYC'd Users, who actively participate in the DAO’s decision-making process and access core functionalities of the Framework, and generic holders, who hold tokens for speculative purposes.

### Generic Holders

Generic Holders are Users who hold a DAO token for speculative purposes. These users have not undergone the KYC process and do not have access to the functionalities of the Framework. Their primary interest lies in the potential appreciation of the token value over time.

### Investors

This user type is the entry point for everyone interested in actually gaining from the Framework. Each Investor has to undergo a KYC procedure (Know Your Customer) to confirm their identity. These Users have the right to obtain dividends at the end of the fiscal year, based on the amount of Governance Tokens (see definition below) owned.

### Contributors

These Users are Investors with additional privileges, as they have access to the core functionalities of the Framework:

- Creating Resolutions: they can propose new resolutions for consideration by a DAO.
- Voting on Resolutions: they have the right to vote on resolutions, influencing the direction and decisions made by a DAO.
- Internal Token Market: they can access the internal token market of a DAO, where they can trade Governance Tokens with other Contributors.
- Wrapping/Unwrapping Tokens: they can convert their Governance Tokens into Neokingdom Tokens and vice versa, respecting the rules of a DAO (we will further discuss these two types of tokens later in this paper.)

### Managing board

On top of being Contributors, these Users have additional rights related to the resolution administration. The role of the managing board is solely to ensure that the resolutions are formally correct, but they do not gatekeep Contributors from making decisions. They may approve, update, or reject the resolutions before voting based on their formal correctness only.

## Tokenomics

In this chapter, we will discuss the tokenomics of the two tokens used in the Framework: the Governance Token and the Neokingdom Token. We will delve into their use cases, how they are minted, their supply, and how they can be used by the different Users within the ecosystem.

### Governance Token

GovernanceToken gives access to User's ownership, voting, and dividend rights within the organization. It is designed exclusively for KYC-compliant Users. The primary use cases for GovernanceTokens are:

- Voting on resolutions and influencing the decision-making process within the DAO.
- Representing the size of the ownership in the organization and determining dividend rights.

Typically, GovernanceTokens are minted periodically, based on each Contributor's time contributed to the organization. GovernanceTokens are also minted ad-hoc based on User´s monetary or in-kind investments to the DAO. For every minted GovernanceToken, a corresponding NeokingdomToken is minted and vaulted in the GovernanceToken contract.

GovernanceTokens can be traded internally among KYC-compliant Users via the InternalMarket smart contract. Importantly, tokens traded internally have a fixed value of 1 Euro, creating a non-speculative trading system within the DAO.

Contributors are required to offer their GovernanceTokens internally before being able to trade them in the secondary market. The latter is achieved by converting (wrapping) GovernanceTokens into NeokingdomTokens. Only after the internal offer period has passed and if no internal sale is made, Contributors can wrap and trade their tokens in the secondary market.

To facilitate liquidity for contributors, GovernanceTokens can be redeemed through the DAO. The DAO pays contributors in USDC and burns the redeemed tokens. This allows contributors to access liquidity for their efforts and "pay the bills" during times when there is no active secondary market for NeokingdomTokens. The DAO has created a special voluntary Trustworthiness Reserve for that purpose which grows in line with the number of GovernanceTokens minted over time.

### Neokingdom Token

The Neokingdom Token is a standard ERC-20 token that has a 1:1 relationship with the Governance Token. The Neokingdom Token can be held and traded by anyone without any restrictions. However, it does not grant any special rights or privileges unless it is wrapped into a Governance Token by a KYC-compliant User. The primary use cases of the Neokingdom Token are:

- External token market: Neokingdom Tokens can be traded on external markets, providing liquidity and access for Users who are not members of the DAO (i.e. Generic Holders). This can result in speculative investments and potential appreciation in value.
- Wrapping/Unwrapping Tokens: KYC-compliant Users can convert their Governance Tokens into Neokingdom Tokens and vice versa, according to the rules of the DAO. This allows for flexibility in managing token holdings and facilitates trading on internal and external markets.

A new Governance Token can be minted only after the DAO receives a contribution either in time, money or in-kind (with the ratio at least 1 euro worth contributed equals to 1 token minted). The total supply of Neokingdom Tokens is never more than the total supply of Governance Tokens, maintaining a 1:1 relationship. As new Governance Tokens are minted, an equal number of Neokingdom Tokens are also minted.

### Token Usage by User type

1. Generic Holders: These Users hold Neokingdom Tokens for speculative purposes, hoping for potential appreciation in value. They do not have access to the functionalities of the Framework.
1. Investors: These KYC-compliant Users hold Governance Tokens, granting them the right to receive dividends. They do not have access to the core functionalities of the Framework.
1. Contributors: These KYC-compliant Users, in addition to being Investors, hold Governance Tokens, giving them access to the core functionalities of the Framework, such as creating and voting on resolutions, and using the internal token market. They can also wrap and unwrap tokens between Governance Tokens and Neokingdom Tokens.
1. Managing board: These KYC-compliant Users, in addition to being contributors, have the right to approve, reject, or update resolutions before voting.

In summary, the tokenomics of the Framework is designed to create a diverse and thriving ecosystem that rewards mostly KYC compliant Users for their contributions, fosters active participation of Contributors, and encourages speculative investments from outsiders to support the growth and success of the DAO.

## Use cases

In this section, we'll describe various use cases and highlight the specific smart contracts responsible for managing each task. This will provide a clearer understanding of how the different smart contracts work together to facilitate the operations within the DAO.

### Establish a new DAO

To establish a new DAO, a company is incorporated in Estonia, and an amount of shares equal to the share capital of the company is minted (for Teledisko DAO OÜ and Neokingdom DAO OÜ its 10,000 tokens). A portion of these shares is assigned to the founder wallet, and the remaining shares are assigned to the DAO.

Smart contracts involved:

- `ShareholderRegistry.sol`: mint and distribute shares.

### KYC a new wallet

For the KYC process, new users provide necessary documents for verification. Once the user passes the KYC checks, one share is transferred from the founder's wallet to the new user's wallet. The user's status is then set to investor in the Shareholders' Registry.

Smart contracts involved:

- `ShareholderRegistry.sol`:
  - transfer a share from the DAO to the new whitelisted wallet
  - change the status of the wallet to `investor`

### Add a new contributor to the DAO

To add a new contributor to the DAO, a resolution is proposed to promote an investor to contributor status. If the resolution reaches a positive quorum, an operator sets the user status to contributor in the Shareholders' Registry. The user's wallet is then whitelisted as a contributor.

Smart contracts involved:

- `ResolutionManager.sol`:
  - create the draft resolution to onboard the new contributor
  - vote for or against the draft resolution
- `ShareholderRegistry.sol`: if the resolution passes, change the status from `investor` to `contributor`
- `Voting.sol`:
  - track the voting power of each contributor
  - update the total voting power of the DAO and the voting power of the new contributor

### Monthly rewards

Contributors track their contribution time via an off-chain app. At the beginning of each month, any contributor can create a resolution to mint tokens equivalent to their time contribution. This task is automated, and if the resolution passes, anyone can execute the payload to mint Governance Tokens according to each contributor's time contribution. For each minted Governance Token, a Neokingdom Token is minted and vaulted in the Governance Token contract (wrapped).

Smart contracts involved:

- `ResolutionManager.sol`:
  - create the draft resolution to reward contributors
  - if the resolution passes, execute the reward distribution and mint new governance tokens
- `GovernanceToken.sol`: mint new tokens and track the amount of tokens minted per contributor over time
- `NeokingdomToken.sol`: wrap the newly minted Governance Tokens
- `RedemptionController.sol`: track the amount of tokens minted per contributor over time
- `Voting.sol`: update the voting power of each contributor, and the total voting power of all contributors within the DAO.

### Selling/exiting governance tokens

Governance Tokens are subjected to our Shareholders' Agreement and cannot be transferred freely. To exit Governance Tokens, they must first be offered to other contributors (the "inner circle") via our Dapp, which interacts with the InternalMarket contract. Any other contributor can match the offer (fully or partially) at a price of 1 Governance Token for 1 Euro. The exchange happens on-chain using the USDC stablecoin, with an oracle converting EUR to USDC. Tokens are automatically exchanged once the transaction is confirmed. If any tokens remain after 7 days, they can be withdrawn (unwrapped) into Neokingdom Tokens and freely exchanged in the secondary market.

Smart contracts involved:

- `InternalMarket.sol`:
  - create new offers
  - match offers
- `Voting.sol`:
  - update the total voting power of the DAO
  - when creating an offer, update the total voting power of the DAO and the voting power of the contributor offering the tokens.
  - when an offer is matched, update the total voting power of the DAO and the voting power of the contributor buying the tokens
- `NeokingdomToken.sol` and `GovernanceToken.sol`: update balances

### Redeeming Governance Tokens

The DAO allows contributors to redeem their tokens for 1 EUR each, enabling them to pay bills if no secondary market sale is possible. Contributors must first offer their Governance Tokens to the inner circle (7 days) and then on the secondary market (53 days). After a 60-day window, the user can redeem the remaining tokens with additional limits on the number of tokens. The Internal Market smart contract handles this redeeming action: Governance Tokens are burnt, and the appropriate amount of USDC is transferred from the DAO to the user wallet. Only tokens minted within the last 3 active months within the last 15 months can be redeemed.

- `InternalMarket.sol`: redeem tokens (exchange tokens for USDC with the DAO)
- `Voting.sol`: when tokens are redeemed, update the total voting power of the DAO
- `RedemptionController.sol`: make sure that the contributor can exit only the right amount of tokens
- `NeokingdomToken.sol` and `GovernanceToken.sol`: burn redeemed tokens

### Voting on Governance decisions

Any contributor can create a resolution, which is then validated for legal validity by a managing board member, who may approve, update, or reject it. Once approved, a snapshot of the current voting power, share distribution, and delegation table is taken. There is a notice period during which contributors cannot vote on the resolution. After this period, contributors are free to vote. If contributor A has delegated their voting power to contributor B, B's vote will include A's voting power and shares. Contributor A can always decide to vote, with their last vote taking precedence over the delegate's vote. After the voting window closes, the resolution can no longer be voted on, and the quorum is checked. The ResolutionManager smart contract manages all resolution logic, while the Voting smart contract manages voting power and delegation logic.

- `ResolutionManager.sol`:
  - create the draft resolution to onboard the new contributor
  - vote for or against the draft resolution
- `Voting.sol`:
  - track the voting power of each contributor

## Architecture

The Smart Contract System is designed to manage a decentralized autonomous organization (DAO) on the blockchain. It consists of several interlinked smart contracts that handle various aspects such as shareholder registry, governance tokens, voting, resolution management, internal market, redemption control, and the Neokingdom token. This overview is targeted at technical users familiar with Solidity development and blockchain concepts.

### Code organization

In the development of smart contracts, we follow a specific architectural design pattern to ensure modularity, upgradability, and maintainability. This structure involves the creation of a base contract and an extension contract for each smart contract in the system.

The `<SmartContractName>Base.sol` serves as the foundation for the core functionality of the contract. It contains all the private or internal methods necessary for the contract to function. Public methods may be included to read the state, but no writable methods are exposed in the base contract. This design choice ensures that the core functionality is encapsulated and protected from external interactions. Additionally, base contracts are designed to be upgradeable, allowing the implementation of new features or improvements over time without affecting the system's stability.

The `<SmartContractName>.sol` contract extends the functionality of its Base.sol counterpart. It exposes public writable methods while implementing the appropriate Access Control Lists (ACLs) to secure these methods. This separation of concerns allows developers to maintain control over the contract's core functionality while enabling the necessary interaction with external components and users.

However, the `NeokingdomToken.sol` contract is intentionally designed to be non-upgradeable. This decision ensures that the token remains secure and stable, preventing any possibility of a rug-pull scenario. By making the `NeokingdomToken.sol` contract immutable, holders can trust that their tokens are safe and not subject to sudden changes or manipulations.

By adopting this architectural pattern, we ensure that our smart contracts are modular and easily maintainable. The separation of core functionality from its public interface provides a clear distinction of responsibilities within each contract, promoting cleaner code and easier updates. Furthermore, the upgradeability feature inherent to the base contracts allows the system to evolve and adapt to new requirements and challenges without compromising its security or reliability.

### Smart Contracts

![NeokingdomToken](./images/contracts-simple.png)

<!-- sol2uml class -hp -ht -hv -hm -hc -hn -hsc -he -hs -hf -d 1 -f svg -s -c -b NeokingdomToken,GovernanceToken,GovernanceTokenBase,ResolutionManager,ShareholderRegistry,ShareholderRegistryBase,Voting,VotingBase,InternalMarket,InternalMarketBase,RedemptionController  contracts -->

Check Appendix for a more thorough diagram.

#### ShareholderRegistry.sol:

The `ShareholderRegistry` contract is an ERC-20 token that represents the company shares and serves as a single source of truth for KYC-compliant users. If a user owns a share, it signifies that their identity has been verified. The contract manages the status of each KYC-compliant user, assigning them roles such as investors, contributors, and board members. Share transfers are only permitted through DAO decisions, ensuring control and security within the organization. The `ShareholderRegistry` contract communicates with the `Voting` contract to update the voting power of each contributor.

#### GovernanceToken.sol:

The `GovernanceToken` contract is an ERC-20 token designed exclusively for KYC-compliant users. It grants voting and dividend rights, ensuring active participation and engagement within the organization. Governance tokens can be traded internally among contributors. The contract periodically mints new tokens based on the user's time contributions, rewarding active participation. The transferability of these tokens follows the internal tokenomics of the DAO. The `GovernanceToken` contract interacts with the `NeokingdomToken` contract for token minting, wrapping, and unwrapping operations. It also communicates with `RedemptionController` to update the amount of redeemable tokens.

#### Voting.sol:

The `Voting` contract is responsible for managing and tracking the voting power of each contributor. Voting power is calculated as the sum of Governance Tokens and Shareholder Registry Tokens held by a contributor. The contract also handles vote delegation, enabling a more flexible and efficient decision-making process within the organization.

#### ResolutionManager.sol:

The `ResolutionManager` contract governs the DAO by managing the resolution process. It allows board members to validate resolutions, making them votable. Contributors can create and vote on resolutions, promoting active participation in organizational decisions. The contract accommodates different types of resolutions, with varying notice and voting periods depending on their impact on the DAO. It ensures that resolutions are votable within the established timeframes and keeps track of resolution outcomes. The `ResolutionManager` contract also allows for the execution of resolution payloads upon approval, such as rewarding contributors with Governance Tokens. It communicates with `Voting`, `GovernanceToken`, and `ShareholderRegistry` to obtain information on voting power, token balance, share balance, and to take snapshots at each resolution approval.

#### InternalMarket.sol:

The `InternalMarket` contract facilitates internal trading and redemption of governance tokens. It enables contributors to withdraw Governance Tokens into Neokingdom Tokens and deposit Neokingdom Tokens into Governance Tokens, providing flexibility in token management. The contract interacts with the `RedemptionController` to regulate token redemption, ensuring a fair and controlled process. It also communicates with the `GovernanceToken` contract to enable trades and to manage user withdrawals and deposits.

#### RedemptionController.sol:

The `RedemptionController` contract manages the logic for determining the redeemable amount of Governance Tokens for contributors at any given point in time. This ensures that the redemption process remains fair and in line with the organization's policies.

#### NeokingdomToken.sol:

The `NeokingdomToken` contract is a standard ERC-20 token with a 1:1 relationship with the Governance Token. It can be transferred and traded by anyone, but it does not provide special rights unless wrapped into a Governance Token by a KYC-compliant holder via the Internal Market. This maintains a clear distinction between the two tokens and their functionalities.

#### DAORoles.sol

The `DAORoles` contract centralizes ACL management across multiple contracts in NEOKingdom DAO, streamlining access control and reducing the risk of errors or inconsistencies, providing a robust solution for all the smart contracts in our architecture.

## Appendix

### Class Diagram with Functions

![NeokingdomToken](./images/contracts-full.png)

<!-- sol2uml class -hp -ht -hv -hm -hc -hn -hsc -he -hs -d 1 -f svg -s -c -b NeokingdomToken,GovernanceToken,GovernanceTokenBase,ResolutionManager,ShareholderRegistry,ShareholderRegistryBase,Voting,VotingBase,InternalMarket,InternalMarketBase,RedemptionController  contracts -->
