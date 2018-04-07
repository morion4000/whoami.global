const IPFS = require('ipfs-mini');


class IpfsService {
  constructor(web3) {
    this.ipfs = new IPFS({
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https'
    });
  }

  // See: https://github.com/OriginProtocol/platform/blob/develop/packages/origin.js/src/ipfs-service.js
  async add(text, callback) {
    ipfs.add(text, callback);
  }
}

export default IpfsService;
