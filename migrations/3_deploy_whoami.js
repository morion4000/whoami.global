var Whoami = artifacts.require("./Whoami.sol");

module.exports = function(deployer) {
  deployer.deploy(Whoami);
};
