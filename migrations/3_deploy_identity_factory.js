var IdentityFactory = artifacts.require("./IdentityFactory.sol");

module.exports = function(deployer) {
  deployer.deploy(IdentityFactory);
};
