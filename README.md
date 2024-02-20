![Test workflow](https://github.com/NeokingdomDAO/whitelabel/actions/workflows/node.yml/badge.svg)

# Neokingdom DAO Contracts

Welcome to the Neokingdom DAO Contacts.

## Documentation

- [NEOKingdom DAO Yellow Paper](./docs/yellowpaper/yellowpaper.md) describes why this project exists, and provides high level overview of the structure of the smart contracts.
- [Flow charts](./docs/flowcharts) includes four flow charts:
  - _contributor_ shows how new people are added to the DAO as contributors.
  - _proposal_ gives an overview of the governance process of the DAO.
  - _tokenomics_ explains how tokens are moved from the contributor's wallet to another wallet.
  - _voting_ shows how contributors vote to resolutions.
- [Complex flows](./docs/complex_flows):
  - _voting_ elaborates the logic behind the voting power distribution and delegation implemented in the Neokingdom DAO contracts
  - _redemption_ elaborates the logic behind the redemption process of Neokingdom DAO
- Integration tests:
  - [Integration](./test/Integration.ts) is a collection of integration tests that touches multiple use cases.
  - [Integration governance+shareholders](./test/IntegrationGovernanceShareholders.ts) tests the invariant that the sum of shares and tokens is equal to the user's voting power
  - [Integration market+redemption](./test/IntegrationInternalMarketRedemptionController.ts) tests that users promoted from investor to contributor have the right voting power.

## Commands

```
# Update readme
python scripts/update-readme.py deployments/9001.network.json
```

```
# Clean the build dir, sometimes this is a good idea
npx hardhat clean

# Compile the contracts
npx hardhat compile

# Test the contracts
npx hardhat test

# Deploy to production
npx hardhat deploy --network evmos
```

# Deploy

## Testnet

```
npx hardhat deploy:mocks --verify --config-file config.js --network mumbai
npx hardhat deploy:dao --verify --config-file config.js --network mumbai
npx hardhat setup:dao --config-file config.js --network mumbai
npx hardhat setup:test --config-file config.js --network mumbai
```

## Local deployment

```
WAIT_BLOCKS=0 npx hardhat deploy:mocks --restart --config-file config.js --network localhost
WAIT_BLOCKS=0 npx hardhat deploy:dao --restart --config-file config.js --network localhost
WAIT_BLOCKS=0 npx hardhat setup:dao --restart --config-file config.js --network localhost
WAIT_BLOCKS=0 npx hardhat setup:test --restart --config-file config.js --network localhost
```

- [USDC](https://mumbai.polygonscan.com/address/0xE4105F54Bf2cCcCC37EE057C89e6c1134EBc9449) `0xE4105F54Bf2cCcCC37EE057C89e6c1134EBc9449`
- [DIAOracleV2](https://mumbai.polygonscan.com/address/0xb07Ef6909af5d52931D942dbaB6155794C3fc645) `0xb07Ef6909af5d52931D942dbaB6155794C3fc645`
- [DAORoles](https://mumbai.polygonscan.com/address/0x8967822842F410496B607E17F9D3e51C889D04e8) `0x8967822842F410496B607E17F9D3e51C889D04e8`
- [Voting](https://mumbai.polygonscan.com/address/0x002A04822dB995841b04F0cd7bc689B38Ad6dEC7) `0x002A04822dB995841b04F0cd7bc689B38Ad6dEC7`
- [GovernanceToken](https://mumbai.polygonscan.com/address/0x75A2D1c4fd6b56E31180e6244c72Cb9a5fc8F935) `0x75A2D1c4fd6b56E31180e6244c72Cb9a5fc8F935`
- [NeokingdomToken](https://mumbai.polygonscan.com/address/0x7394E08A0E12837bfA5d8dd3EdDFEa34ADA54934) `0x7394E08A0E12837bfA5d8dd3EdDFEa34ADA54934`
- [RedemptionController](https://mumbai.polygonscan.com/address/0x3aE5A2f4a84B61Ebbe7B56754175bE305fa05d10) `0x3aE5A2f4a84B61Ebbe7B56754175bE305fa05d10`
- [InternalMarket](https://mumbai.polygonscan.com/address/0xD0A04300B06b0b972D26aB328BbfFbD80Ee2B8a2) `0xD0A04300B06b0b972D26aB328BbfFbD80Ee2B8a2`
- [ShareholderRegistry](https://mumbai.polygonscan.com/address/0x2EdbCdDA85CC393b1104BE2Db62D7C0028dE88Fa) `0x2EdbCdDA85CC393b1104BE2Db62D7C0028dE88Fa`
- [ResolutionManager](https://mumbai.polygonscan.com/address/0xA79BFAF502D5025B011cc7E8471b03193fC88F09) `0xA79BFAF502D5025B011cc7E8471b03193fC88F09`

# Audits

- [SolidProof](https://solidproof.io/)
  - Tag: https://github.com/NeokingdomDAO/contracts/releases/tag/audit1
  - Report: https://github.com/solidproof/projects/blob/main/2023/NeokingdomDAO/SmartContract_Audit_Solidproof_NeoKingdomDAO.pdf
- [LeastAuthority](https://leastauthority.com)
  - Tag: https://github.com/NeokingdomDAO/contracts/releases/tag/audit2
  - Report: https://leastauthority.com/blog/audits/neokingdom-dao-smart-contracts/
