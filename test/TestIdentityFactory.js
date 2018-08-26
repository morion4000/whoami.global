const BigNumber = web3.BigNumber;
require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should();
const IdentityFactory = artifacts.require("./IdentityFactory.sol")

contract("TestIdentityFactoryInit", function([owner, wallet, investor, otherInvestor]) {
  before(async function() {
    this.identity = await IdentityFactory.deployed();
  });

  beforeEach(async function() {});

  it("Should be deployed", async function() {
    this.identity.should.exist;
  });

  it("Should be owned", async function() {
    const _owner = await this.identity.owner();

    _owner.should.be.equal(owner);
  });

  it("Should create a new identity", async function() {
    let create = await this.identity.createIdentity('morion4000', {
      from: owner
    });
  });

  it("Should get an identity", async function() {
    let identity = await this.identity.getOwnerIdentity({
      from: owner
    });

    identity[0].should.be.equal('morion4000');
  });
});
