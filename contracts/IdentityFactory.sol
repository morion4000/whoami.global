pragma solidity ^0.4.18;

import "./Ownable.sol";

contract IdentityFactory is Ownable {
    address public owner;

    event NewIdentity(address indexed owner, string username, uint created);

    // Allow for an identity to be marked as compromised by the owner
    // The identity can be unmarked only by an Oracle
    enum State { Created, Locked, Inactive, Compromised, Revoked }

    struct Identity {
        address owner;
        uint created;
        string username;
        //State state;
        // Sum of document's verifiedCount
        uint verifiedCountSum;
    }

    Identity[] public identities;
    mapping (address => Identity) public ownerIdentity;

    function IdentityFactory() {
        owner = msg.sender;
    }

    function createIdentity(string username) public {
        ownerIdentity[msg.sender].username = username;
        ownerIdentity[msg.sender].owner = msg.sender;
        ownerIdentity[msg.sender].created = now;
        //ownerIdentity[msg.sender].state = State.Created;

        identities.push(ownerIdentity[msg.sender]);

        NewIdentity(msg.sender, ownerIdentity[msg.sender].username, ownerIdentity[msg.sender].created);
    }

    function getOwnerIdentity() public view returns (string, uint, uint) {
      return (
        ownerIdentity[msg.sender].username,
        ownerIdentity[msg.sender].created,
        ownerIdentity[msg.sender].verifiedCountSum
      );
    }
}
