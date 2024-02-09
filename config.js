/**
 * @type{import('./lib/internal/types').DAOConfig}
 */
const config = {
  multisigAddress: "0x197970E48082CD46f277ABDb8afe492bCCd78300",
  tokenName: "Vanilla DAO",
  tokenSymbol: "VD",
  shareCapital: "10000000000000000000000",
  governanceTokenName: "Vanilla DAO Governance",
  governanceTokenSymbol: "VDGOV",
  shareTokenName: "Vanilla DAO Share",
  shareTokenSymbol: "VDSHARE",
  reserveAddress: "0x197970E48082CD46f277ABDb8afe492bCCd78300",
  usdcAddress: "0xE4105F54Bf2cCcCC37EE057C89e6c1134EBc9449",
  diaOracleAddress: "0xb07Ef6909af5d52931D942dbaB6155794C3fc645",
  contributors: [
    {
      name: "albi",
      address: "0x197970E48082CD46f277ABDb8afe492bCCd78300",
      status: "board",
      shareBalance: "1000000000000000000",
      balance: "20000000000000000000000",
    },
    {
      name: "gian",
      address: "0x8e2e09eb2a0a8e6e1d8de3e5fb09ec1e05b0cdbf",
      status: "board",
      shareBalance: "1000000000000000000",
      balance: "12000000000000000000000",
    },
    {
      name: "stefano",
      address: "0xbded7c8a2efa4cf2ee6c953e6447a246f3ac4e12",
      status: "board",
      shareBalance: "1000000000000000000",
      balance: "22000000000000000000000",
    },
    {
      name: "nicola",
      address: "0x2e1aF63Cd595A6D715E5e2D92151801F0d406a6b",
      status: "board",
      shareBalance: "1000000000000000000",
      balance: "22000000000000000000000",
    },
    {
      name: "andrea",
      address: "0x876E552A2F933F1067FEE167878e9E22622e6FE7",
      status: "board",
      shareBalance: "1000000000000000000",
      balance: "22000000000000000000000",
    },
  ],
};

module.exports = config;
