require('@nomicfoundation/hardhat-ethers');
require('@nomicfoundation/hardhat-etherscan'); // Ensure this is the correct package
require('dotenv').config();  // Load environment variables from .env file

module.exports = {
  solidity: "0.8.0",  // Adjust the version if needed
  networks: {
    goerli: {
      url: process.env.GOERLI_URL || "", // Ensure this URL is correctly set in your .env
      accounts: [process.env.PRIVATE_KEY || ""]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || "" // Optional: for contract verification on Etherscan
  }
};

