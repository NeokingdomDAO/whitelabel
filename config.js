/**
 * @type{import('./lib/internal/types').DAOConfig}
 */
const config = {
  multisigAddress: "",
  tokenName: "Teledisko DAO",
  tokenSymbol: "TD",
  governanceTokenName: "Teledisko DAO Governance",
  governanceTokenSymbol: "TDGOV",
  shareTokenName: "Teledisko DAO Share",
  shareTokenSymbol: "TDSHARE",
  reserveAddress: "0x...",
  usdcAddress: "0xB01622A5fc48DFba12E22E9D67Aca874dc5bE7E1",
  diaOracleAddress: "0x0dF7741b706370Fd0d1b7C0331E2e5BA19BDef60",
  contributors: [
    {
      name: "albi",
      address: "0x197970E48082CD46f277ABDb8afe492bCCd78300",
      status: "board",
      tokens: "20000000000000000000000",
    },
    {
      name: "gian",
      address: "0x8e2e09eb2a0a8e6e1d8de3e5fb09ec1e05b0cdbf",
      status: "board",
      tokens: "12000000000000000000000",
    },
    {
      name: "stefano",
      address: "0xbded7c8a2efa4cf2ee6c953e6447a246f3ac4e12",
      status: "board",
      tokens: "22000000000000000000000",
    },
    {
      name: "nicola",
      address: "0x2e1aF63Cd595A6D715E5e2D92151801F0d406a6b",
      status: "board",
      tokens: "22000000000000000000000",
    },
  ],
};

module.exports = config;
