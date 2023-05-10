
//Creaded by: Corvus Codex
//Github: https://github.com/CorvusCodex/
//Licence : MIT License

//Support my work:
//BTC: bc1q7wth254atug2p4v9j3krk9kauc0ehys2u8tgg3
//ETH & BNB: 0x68B6D33Ad1A3e0aFaDA60d6ADf8594601BE492F0
//Buy me a coffee: https://www.buymeacoffee.com/CorvusCodex

const schnorrkel = require('@polkadot/wasm-crypto/schnorrkel');
const { u8aToHex } = require('@polkadot/util');
const { encodeAddress } = require('@polkadot/keyring');

async function generatePolkadotKeyPair() {
  // Generate a random seed
  const seed = schnorrkel.randomBytes(32);

  // Generate a key pair from the seed
  const keyPair = schnorrkel.keypairFromSeed(seed);

  // Extract the private and public keys
  const privateKey = u8aToHex(keyPair.slice(0, 64));
  const publicKey = u8aToHex(keyPair.slice(64));

  // Encode the public key as a Polkadot address
  const address = encodeAddress(publicKey);

  return { privateKey, publicKey, address };
}

async function main() {
  const { privateKey, publicKey, address } = await generatePolkadotKeyPair();
  console.log(`Private key: ${privateKey}`);
  console.log(`Public key: ${publicKey}`);
  console.log(`Address: ${address}`);
}

main();
