const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

const { keccak256 } = require("ethereum-cryptography.keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

app.use(cors());
app.use(express.json());

const balances = {
  "048004e9b860ceabc2027500894a7d9edaa0d394978fcd04ba330bd29646dc429c0c4fc3d9c4dc3f3f9a521bad02025f27b5251fbf24582c388074b6ed9d629d39": 100,
        // e11ad7787ac5580199c3b5e465121700a204ed67cc3dd366348a98a261bbe51a private key
  "0429360e97f32037d7a57e06f390aecf2a655da36691eb989a194800a9dea6ebd97708f7272c6896ce80fc84ffe807bde650c917125a59d35c552fba94ec859728": 50,
        // f39f2a8e1075d0b39addaae95f007b983c9882442fa0c52944625ab0ada51f45
  "04c7c11f4d5760e5d7e72f4801209cec897a36c44912e0a831b0b42f0b0904133e0fd0372aa6a5345601e3d3245d983d6313af5a76fbcdcf68487a8399abf268db": 75,
        // fbd0bc8619add8c5f404482d27d82e85267458a0f909a00633f621d21a11e0a9
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;   // use pulic address...
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
    // TODO: get signature from client
    // get public address with signature
    // set send as signature

                //function hashMessage(address) {
                //    const bytes = utf8ToBytes(message);
                //    const hash = keccak256(bytes);
                //    return (hash);
                //}
    
    async () => {
        const [sig, recoveryBit] = await signMessage(address);
        const recovered = secp.recoverPublicKey(address, sig, recoveryBit);

        const publicKey = secp.getPublicKey(address);
        assert.equal(toHex(recovered), toHex(publicKey));
    }

    sender = publicKey

  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
