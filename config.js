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
  usdcAddress: "0x15c3eb3b621d1bff62cba1c9536b7c1ae9149b57",
  diaOracleAddress: "0x3141274e597116f0bfcf07aeafa81b6b39c94325",
  contributors: [
    {
      name: "Alice",
      address: "0x...",
      status: "board",
      tokens: "",
    },
    {
      name: "Bob",
      address: "0x...",
      status: "contributor",
      tokens: "",
    },
    {
      name: "Carol",
      address: "0x...",
      status: "contributor",
      tokens: "",
    },
  ],
};

export default config;
