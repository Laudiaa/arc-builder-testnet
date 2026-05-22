// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "openzeppelin-contracts/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {

    uint256 public nextTokenId;

    constructor() ERC721("ArcBuilderNFT", "ABNFT") {}

    function mint() public {
        _safeMint(msg.sender, nextTokenId);
        nextTokenId++;
    }
}
