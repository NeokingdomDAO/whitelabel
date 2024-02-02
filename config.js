/**
 * @type{import('./lib/internal/types').DAOConfig}
 */
const config = {
  multisigAddress: "0x0050CBd6570948aE53E272995D5Cf6aF29340BbD",
  tokenName: "Vanilla DAO",
  tokenSymbol: "VD",
  shareCapital: "10000000000000000000000",
  governanceTokenName: "Vanilla DAO Governance",
  governanceTokenSymbol: "VDGOV",
  shareTokenName: "Vanilla DAO Share",
  shareTokenSymbol: "VDSHARE",
  reserveAddress: "0x0050CBd6570948aE53E272995D5Cf6aF29340BbD",
  usdcAddress: "0x4f2cd1D7ce5f4Db38F78bEbD23D7C8bE94117387",
  diaOracleAddress: "0x1CC22B1E585ddc83554907B15D82B548a13b6223",
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
  ],
};

module.exports = config;
