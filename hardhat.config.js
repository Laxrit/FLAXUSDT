require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-waffle');
require('dotenv').config();
require('@nomiclabs/hardhat-etherscan');

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.24",
      },
      {
        version: "0.8.20",
      }
    ]
  },
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_API_URL,  // Make sure this matches your environment variable name
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
