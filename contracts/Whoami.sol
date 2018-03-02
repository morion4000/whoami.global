pragma solidity ^0.4.18;

contract Whoami {
    address public owner;

    event NewIdentity(address owner, uint created);
    event NewDocument(string what, string ipfsHash);

    // Allow for an identity to be marked as compromised by the owner
    // The identity can be unmarked only by an Oracle
    enum State { Created, Locked, Inactive, Compromised, Revoked }

    struct Identity {
        address owner;
        uint created;
        //State state;
        // Sum of document's verifiedCount
        uint verifiedCountSum;
    }

    // Implement notary/middleman system that is comprised of third-party
    // oracles that verify the information i.e. documents/phone num/email/etc
    // Can multiple notaries verify the same information?
    // Is there a reputation indicator for Notary?
    // if no, how are they incentivised ?
    // if yes, how do you prevent Sibyl attacks?
    // struct Notary {}

    // Documents are stored on IPFS. The IPFS hash is stored in the contract.
    // Allow for documents to be extensible
    // Link document to owner or identity?
    // Document has a bounty to it. That is payed to the notaries for validation
    // Let the market set the price for validation
    struct Document {
        address owner;
        uint created;
        string key;
        string value;
        //string key2;
        //string value2;
        //string key3;
        //string value3;
        //State state;
        //uint bounty;
        //uint verifiedCount;
        //bool encrypted;
        //bool privacy;
    }

    Identity[] public identities;
    mapping (address => Identity) public ownerIdentity;

    Document[] public documents;
    mapping (address => uint) public ownerDocumentCount;

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function Whoami() {
        owner = msg.sender;
    }

    function createIdentity() public {
        ownerIdentity[msg.sender].owner = msg.sender;
        ownerIdentity[msg.sender].created = now;
        //ownerIdentity[msg.sender].state = State.Created;

        identities.push(ownerIdentity[msg.sender]);

        NewIdentity(msg.sender, ownerIdentity[msg.sender].created);
    }

    // Creating documents have a bounty attached to the which is used to pay
    // notaries
    function createDocument(string key, string value) payable public {
        Document memory document = Document(msg.sender, now, key, value);

        documents.push(document);
        ownerDocumentCount[msg.sender]++;

        //NewDocument(_what, _ipfsHash);
    }

    function getDocumentsByOwner(address _owner) view returns (uint[]) {
        uint[] memory result = new uint[](ownerDocumentCount[_owner]);
        uint counter = 0;

        for (uint i = 0; i < documents.length; i++) {
            if (documents[i].owner == _owner) {
                result[counter] = i;
                counter++;
            }
        }

        return result;
    }

    function getOwnerIdentity() public view returns (address, uint, uint) {
      return (ownerIdentity[msg.sender].owner, ownerIdentity[msg.sender].created, ownerIdentity[msg.sender].verifiedCountSum);
    }
}
