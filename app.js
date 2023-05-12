
//Creaded by: Corvus Codex
//Github: https://github.com/CorvusCodex/
//Licence : MIT License

//Support my work:
//BTC: bc1q7wth254atug2p4v9j3krk9kauc0ehys2u8tgg3
//ETH & BNB: 0x68B6D33Ad1A3e0aFaDA60d6ADf8594601BE492F0
//Buy me a coffee: https://www.buymeacoffee.com/CorvusCodex

const { Keyring } = require('@polkadot/keyring');
const { randomAsU8a, cryptoWaitReady } = require('@polkadot/util-crypto');

// Define an asynchronous main function
async function main() {
  // Wait for the WASM interface to be ready
  await cryptoWaitReady();
  // Create a new Keyring instance with the sr25519 key type
  const keyring = new Keyring({ type: 'sr25519' });
  // Generate a random seed using the randomAsU8a function
  const seed = randomAsU8a(32);
  // Add a new key pair to the keyring using the generated seed
  const pair = keyring.addFromSeed(seed);

  // Print the private key as a hexadecimal string
  console.log(`Private Key: ${seed.toString('hex')}`);
  // Print the address of the key pair
  console.log(`Address: ${pair.address}`);
}

main();
