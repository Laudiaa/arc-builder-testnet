// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HelloArc {
    string public greeting = "Hello ARC";

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}
