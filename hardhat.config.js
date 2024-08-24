require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();  // Load environment variables from .env file

module.exports = {
  solidity: "0.8.0",  // Adjust the version if needed
  networks: {
    goerli: {
      url: process.env.GOERLI_URL || "",
      accounts: [process.env.PRIVATE_KEY || ""]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || "" // Optional: for contract verification on Etherscan
  }
};

