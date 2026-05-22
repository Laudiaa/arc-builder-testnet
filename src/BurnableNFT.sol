// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721Burnable.sol";

contract BurnableNFT is ERC721Burnable {

    uint256 public nextTokenId;

    constructor()
        ERC721("BurnableArcNFT", "BANFT")
    {}

    function mint() public {
        _safeMint(msg.sender, nextTokenId);
        nextTokenId++;
    }
}
