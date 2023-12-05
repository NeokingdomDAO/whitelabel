/**
 * @type{import('./lib/internal/types').DAOConfig}
 */
const config = {
  multisigAddress: "",
  tokenName: "Crowdpunk DAO",
  tokenSymbol: "CROWD",
  governanceTokenName: "Crowdpunk DAO Governance",
  governanceTokenSymbol: "CROWDGOV",
  shareTokenName: "Crowdpunk DAO Share",
  shareTokenSymbol: "CROWDSHARE",
  reserveAddress: "0x197970E48082CD46f277ABDb8afe492bCCd78300",
  usdcAddress: "0x15c3eb3b621d1bff62cba1c9536b7c1ae9149b57",
  diaOracleAddress: "0x3141274e597116f0bfcf07aeafa81b6b39c94325",
  contributors: [
    {
      address: "0x0a0c93d0f0553ebf7b7bea31be6fc65e38cc9b6e",
      status: "board",
      shareBalance: "8000000000000000000000",
    },
    {
      address: "0xE113ACe1246201ed9b1BD41e3f044f0da6a28dD4",
      status: "contributor",
      shareBalance: "1000000000000000000",
    },
    {
      address: "0x26C65398A8BF0b7BeA6412b388Df52a73AFe84eF",
      status: "contributor",
      shareBalance: "1000000000000000000",
    },
  ],
};

module.exports = config;
