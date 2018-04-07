import contract from 'truffle-contract';

import DocumentFactoryContract from '../../build/contracts/DocumentFactory.json';


class DocumentFactory {
  constructor(web3) {
    this.web3 = web3;
    this.documentFactory = contract(DocumentFactoryContract);
    this.documentFactory.setProvider(this.web3.currentProvider);
  }

  async create(key, value) {
    const account = this.web3.eth.accounts[0];
    const instance = await this.documentFactory.deployed();

    return instance.createDocument(key, value, {
      from: account
    });
  }
}

export default DocumentFactory;
