const BigNumber = web3.BigNumber;
require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should();
const DocumentFactory = artifacts.require("./DocumentFactory.sol")

contract("TestDocumentFactoryInit", function([owner, wallet, investor, otherInvestor]) {
  before(async function() {
    this.factory = await DocumentFactory.deployed();
  });

  beforeEach(async function() {});

  it("Should be deployed", async function() {
    this.factory.should.exist;
  });

  it("Should be owned", async function() {
    const _owner = await this.factory.owner();

    _owner.should.be.equal(owner);
  });

  it("Should create a new document", async function() {
    let create = await this.factory.createDocument('username', 'morion4000', {
      from: owner
    });
  });

  it("Should get documents", async function() {
    let documents = await this.factory.getDocumentsByOwner(owner, {
      from: owner
    });

    documents.length.should.be.greaterThan(0);
  });
});
