import contract from 'truffle-contract';

import IdentityFactoryContract from '../../build/contracts/IdentityFactory.json';


class IdentityFactory {
  constructor(web3) {
    this.web3 = web3;
    this.identityFactory = contract(IdentityFactoryContract);
    this.identityFactory.setProvider(this.web3.currentProvider);
  }

  async create(username) {
    const account = this.web3.eth.accounts[0];
    const instance = await this.identityFactory.deployed();

    return instance.createIdentity(username, {
      from: account
    });
  }

  async getForOwner(_owner) {
    const account = this.web3.eth.accounts[0];
    const instance = await this.identityFactory.deployed();
    const owner = _owner || account;

    return instance.getOwnerIdentity.call({
      from: owner
    });
  }
}

export default IdentityFactory;
