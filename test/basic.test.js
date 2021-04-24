/*
  Author: Jetso Analin (https://github.com/jetsoanalin)
*/

// Importing all the required packages
const ethers = require('ethers');
const ganache = require('ganache-cli');
const assert = require('assert');


// Library initialization that will talk with Blockchain
// const provider = new ethers.providers.Web3Provider(ganache.provider({ gasLimit: 8000000 }));
const network = "rinkeby";
const provider = ethers.getDefaultProvider(network, {
  infura: '5f40cd78a0004e3dbe19bd078e6d520a',
});
const contractAddress = "0x18AABB2D19224e0D16bdcBa9dc5b1Bf0575bB505";

// Initializing the build files
const basiccontractJSON = require('../test/priceFetchAbi.json');

let  basiccontractInstance;

// Describing the 1st Test

describe('Price Fetch Contract Testing', () => {

    // Describing the 1st Test case
    describe('Loading the contract from rinkeby', async() => {

      // Initializing the 1st sub test 
      it('This should load the instance of the contract deployed in the rinkeby network', async() => {
  
        // initalizing the contract instance 
        basiccontractInstance = new ethers.Contract(contractAddress, basiccontractJSON, provider);

  
        // Comparing the set value to confirm
        assert.ok(
          basiccontractInstance,"Contract Instance Loaded"
        );
      });
    });


  // Describing the 2nd Test case
  describe('Checking the price fetching function in Contract', async() => {

    // Initializing the 1st sub test 
    it('This should check for the price and return true if fetched', async() => {

      // Getting the price value from blockchain
      const currentValue = await basiccontractInstance.functions.getThePrice();

      assert.ok(
        currentValue,"Fetch The Price Sucessful"
      );
      console.assert(currentValue,"Value Fetched");
    });
  });

});