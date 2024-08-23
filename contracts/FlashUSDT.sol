// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20FlashMint.sol";

contract FLAXUSDT is ERC20, ERC20FlashMint {
    uint256 public constant INITIAL_SUPPLY = 1000000 * 10 ** 18; // 1 million tokens with 18 decimals
    uint256 public mintingInterval = 3 days; // Default minting interval
    uint256 public nextMintTime;
    uint256 public mintingAmount = 1500000 * 10 ** 18; // 1.5 million tokens

    constructor() ERC20("FLAX USDT", "LUSDT") {
        _mint(msg.sender, INITIAL_SUPPLY); // Mint initial tokens to the deployer
        nextMintTime = block.timestamp + mintingInterval; // Set the next mint time
    }

    function mintTokens() external {
        require(block.timestamp >= nextMintTime, "Minting interval has not passed");
        _mint(msg.sender, mintingAmount);
        nextMintTime = block.timestamp + mintingInterval; // Update the next mint time
    }

    function setMintingInterval(uint256 _interval) external {
        mintingInterval = _interval;
    }

    function setMintingAmount(uint256 _amount) external {
        mintingAmount = _amount;
    }
}






