import getWeb3 from './../utils/getWeb3';

class Identity {
  constructor(web3) {
    this.state = {
      web3: null
    };
  }

  componentWillMount() {
    getWeb3
      .then(results => {
        this.setState({
          web3: results.web3,
        });
      })
      .catch(() => {
        console.error('Error finding web3.');
      });
  }
}

export default Identity;
