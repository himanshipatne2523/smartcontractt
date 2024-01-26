// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DoubleYourinput {
    uint256 public value;
    address public owner;

    constructor() {
        value = 42;
    }

    // Get Doubled Value
    function getDoubledValue() public view returns (uint256) {
        return value * 2;
    }

    // Set New Value
    function setNewValue(uint256 _newValue) public {
        value = _newValue;
    }

    // get value

    function getNewValue() public view returns(uint256){
        return value;
    }


    // Add to Value
    function addToValue(uint256 _amount) public {
        value += _amount;
    }

    // Check Even Value
    function isValueEven() public view returns (bool) {
        return (value % 2 == 0);
    }
}