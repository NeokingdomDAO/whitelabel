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
  reserveAddress: "",
  usdcAddress: "",
  diaOracleAddress: "",
  contributors: [
    /*{
          address: '0x0a0c93d0f0553ebf7b7bea31be6fc65e38cc9b6e',
          status: 'board',
          balance: '276279331099999999500000',
          vestingBalance: '343000000000000000000000'
        },
        {
          address: '0xba4e22770217342d3a805527e7afdf5147ca0827',
          status: 'none',
          balance: '119000000000000000000000',
          vestingBalance: '0'
        },*/
    {
      address: "0x0a0c93d0f0553ebf7b7bea31be6fc65e38cc9b6e",
      status: "board",
      balance: "395279331099999999500000",
      vestingBalance: "343000000000000000000000",
    },
    {
      address: "0x962396715b093b10882f6dd7cc990b382ad6b3c2",
      status: "contributor",
      balance: "1893620148000000000000",
      vestingBalance: "56000000000000000000000",
    },
    {
      address: "0x4eb46ed918ab2a037086f9073d068ef3e9496c21",
      status: "contributor",
      balance: "31927615836000000000000",
      vestingBalance: "21000000000000000000000",
    },
    {
      address: "0x3685437a87d200950bf26846c154354442e3f7f7",
      status: "contributor",
      balance: "15805171930000000000000",
      vestingBalance: "21000000000000000000000",
    },
    {
      address: "0x151817e59d370db1f3498f231ee60ae70e016375",
      status: "contributor",
      balance: "1072150000000000000000",
      vestingBalance: "35000000000000000000000",
    },
    {
      address: "0x81eef99b5f6d208b8492dd0bb927a012a11ad9c3",
      status: "contributor",
      balance: "75000000000000000000",
      vestingBalance: "35000000000000000000000",
    },
    {
      address: "0x446dfe42ab40c255acb6d49dae930ddb6bd25703",
      status: "contributor",
      balance: "50000000000000000000",
      vestingBalance: "35000000000000000000000",
    },
    {
      address: "0xdf32878d9bff0cb2026518999b3076fc3b5373fe",
      status: "contributor",
      balance: "30786994600000000000000",
      vestingBalance: "0",
    },
    {
      address: "0xaaa9871fb9f6a9ad6fa72ec92ed47fd027bd1cc7",
      status: "contributor",
      balance: "75000000000000000000",
      vestingBalance: "14000000000000000000000",
    },
    {
      address: "0xace13f04231222a585573312ccf811e9e61ed958",
      status: "contributor",
      balance: "3000000000000000500000",
      vestingBalance: "7000000000000000000000",
    },
    {
      address: "0x68ed91daed8b8205a8181042a362ad2be87f0d9f",
      status: "contributor",
      balance: "100000000000000000000",
      vestingBalance: "7000000000000000000000",
    },
    {
      address: "0x4b2625de2d7236b18f728d8c56ae9d9fce910f9f",
      status: "contributor",
      balance: "75054375000000000000",
      vestingBalance: "7000000000000000000000",
    },
    {
      address: "0xa64d568f331f2774d5cff492f2299505abc0186a",
      status: "board",
      balance: "1556250000000000000000",
      vestingBalance: "0",
    },
    {
      address: "0xa84854488604cbd9721c6a482cb67308fbeeb81a",
      status: "contributor",
      balance: "1020482300000000000000",
      vestingBalance: "0",
    },
    {
      address: "0x651656f98ac58bca9be15fdc1c891736abb1fb59",
      status: "contributor",
      balance: "332500000000000000000",
      vestingBalance: "0",
    },
    {
      address: "0xf53b490d06d1f43da86a074a47a50e9f4e23bb6e",
      status: "contributor",
      balance: "100000000000000000000",
      vestingBalance: "0",
    },
    {
      address: "0x4d9a87cf80db30e212ea32d4f6f904243bb14ff4",
      status: "contributor",
      balance: "100000000000000000000",
      vestingBalance: "0",
    },
    {
      address: "0xbded7c8a2efa4cf2ee6c953e6447a246f3ac4e12",
      status: "contributor",
      balance: "31250000000000000000",
      vestingBalance: "0",
    },
    {
      address: "0x2e1af63cd595a6d715e5e2d92151801f0d406a6b",
      status: "contributor",
      balance: "6970000000000000000",
      vestingBalance: "0",
    },
  ],
};

module.exports = config;
