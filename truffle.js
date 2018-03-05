var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";

module.exports = {
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/JBMeiZCBosJtkptOP154");
      },
      network_id: 3,
      gas: 4712388,
      gasPrice: 100000000000
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/JBMeiZCBosJtkptOP154");
      },
      network_id: 4,
      gas: 4712388,
      gasPrice: 100000000000
    }
  }
};
