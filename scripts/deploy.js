const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const FLAXUSDT = await hre.ethers.getContractFactory("FLAXUSDT");
  
  // Deploy the contract
  console.log("Deploying FLAXUSDT contract...");
  const flaxUSDT = await FLAXUSDT.deploy();

  await flaxUSDT.deployed();
  
  console.log(`FLAXUSDT deployed to: ${flaxUSDT.address}`);
}

// Run the deployment script and handle errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
