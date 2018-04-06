pragma solidity ^0.4.18;

import "./Ownable.sol";

contract IdentityFactory is Ownable {
    address public owner;

    event NewIdentity(address indexed owner, uint created);

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

    Identity[] public identities;
    mapping (address => Identity) public ownerIdentity;

    function IdentityFactory() {
        owner = msg.sender;
    }

    function createIdentity() public {
        ownerIdentity[msg.sender].owner = msg.sender;
        ownerIdentity[msg.sender].created = now;
        //ownerIdentity[msg.sender].state = State.Created;

        identities.push(ownerIdentity[msg.sender]);

        NewIdentity(msg.sender, ownerIdentity[msg.sender].created);
    }

    function getOwnerIdentity() public view returns (address, uint, uint) {
      return (
        ownerIdentity[msg.sender].owner,
        ownerIdentity[msg.sender].created,
        ownerIdentity[msg.sender].verifiedCountSum
      );
    }
}
