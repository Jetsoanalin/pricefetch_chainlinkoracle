# Oracle Price Fetch using Chainlink

## Steps for Testing

Step 1 :
`git clone https://github.com/jetsoanalin/pricefetch_chainlinkoracle.git`

Step 2 :
`cd pricefetch_chainlinkoracle`

Step 3 :
`npm i`

Step 5
`npm run test` 

#### If you want to Deploy it in Blockchain testnet rather than Ganache then Follow these steps :

Deploy Networks : `rinkeby` or `kovan` using the `deploy.js` script. Do `node deploy.js deployall <network-name> <private-key>`.
Eg : `node deploy.js deployall rinkeby 0xf67ea7b3f291950cd29559f56d54ba46ba1dc5072c6747c09d4d64f456f76798`. 

Note : The Deploying wallet should have enough Ether balance in it if not use online faucets to get some test ethers.

## Steps to deploy contract
- You can test deployment on testnets like `rinkeby` or `kovan`. For deployment on mainnet use `homestead`, the process would be same as testnet, the deployment time might vary on different networks.

- To deploy all compiled contracts, do `node deploy.js deployall rinkeby 0xa6779f54dc1e9959b81f448769450b97a9fcb2b41c53d4b2ab50e5055a170ce7`.

- To deploy a specific contract, write it's JSON file name instead of deployall flag, e.g. `node deploy.js SimpleStorage_0.json rinkeby 0xa6779f54dc1e9959b81f448769450b97a9fcb2b41c53d4b2ab50e5055a170ce7`.

- If the contract requires constructor arguments, you can pass it by adding them after the command, e.g. `node deploy.js SimpleStorage_0.json rinkeby 0xa6779f54dc1e9959b81f448769450b97a9fcb2b41c53d4b2ab50e5055a170ce7 "Params"`.
