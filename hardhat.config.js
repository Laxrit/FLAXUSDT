require('@nomiclabs/hardhat-ethers');
require('dotenv').config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: process.env.INFURA_URL, // Replace with your Infura/Alchemy URL
      accounts: [process.env.PRIVATE_KEY] // Replace with your wallet's private key
    }
  }
};
