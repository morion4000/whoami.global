pragma solidity ^0.4.18;

import "./Ownable.sol";

/** @title Document factory. */
contract DocumentFactory is Ownable {
    address public owner;

    event NewDocument(address indexed owner, string key, string value);

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

    Document[] public documents;
    mapping (address => uint) public ownerDocumentCount;

    function DocumentFactory() {
        owner = msg.sender;
    }

    /** @dev Create a document
      * @param key The key of the document.
      * @param value The value of the document.
      */
    function createDocument(string key, string value) payable public {
        Document memory document = Document(msg.sender, now, key, value);

        documents.push(document);
        ownerDocumentCount[msg.sender]++;

        NewDocument(msg.sender, key, value);
    }

    /** @dev Gets documents of the sent address
      * @return _owner The address of the owner.
      * @return result An array with the owner's documents.
      */
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
}
