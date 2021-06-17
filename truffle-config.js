const path = require("path");
const HDWalletProvider = require('./client/node_modules/@truffle/hdwallet-provider');
require('./client/node_modules/dotenv').config();

const MNEMONIC = process.env.REACT_APP_MNEMONIC;
const RINKEBY_KEY = process.env.REACT_APP_RINKEBY_KEY;

console.log("MNEMONIC =", MNEMONIC, RINKEBY_KEY);

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: 5777
    },
    rinkeby: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://rinkeby.infura.io/v3/${RINKEBY_KEY}`),
      network_id: 4,       // Rinkeby's id
      gas: 5500000,        // Rinkeby has a lower block limit than mainnet
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )      
    }
  },
  compilers: {
    solc: {
      version: "0.8.4"
    }
  }

};
