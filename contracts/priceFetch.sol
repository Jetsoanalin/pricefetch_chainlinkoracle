// SPDX-License-Identifier: MIT

pragma solidity ^0.6.7;

import "./AggregatorV3Interface.sol";
// import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";


contract priceFetch {

    AggregatorV3Interface internal priceFeed;

    /**
     * Network: Rinkeby
     * Source : Chainlink
     * Aggregator: ETH/USD
     * Address: 0x8A753747A1Fa494EC906cE90E9f37563A8AF630e
     */
    constructor() public {
        priceFeed = AggregatorV3Interface(0x8A753747A1Fa494EC906cE90E9f37563A8AF630e);
    }

    /**
     * Returns the latest price
     */
    function getThePrice() public view returns (int) {
        (
            uint80 roundID, 
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        return price;
    }
}