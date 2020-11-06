// Import the API
const { ApiPromise, WsProvider } = require('@polkadot/api');

// my account address on Polkadot
const Mario = '14irTviGBPzG6HPkYrQDQbF3pZCcrKW3MZ1ygbvx6xZFELpu';

async function main () {
  // Create an await for the API
  const wsProvider = new WsProvider('wss://rpc.polkadot.io');
  const api = await ApiPromise.create({ provider: wsProvider });
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version()
  ]);
  console.log(`You are connected to chain: ${chain} 
                    nodeName: ${nodeName} 
                    version: ${nodeVersion}\n`);

  // Retrieve the initial balance. Since the call has no callback, it is simply a promise
  // that resolves to the current on-chain value
  let { data: { free: previousFree }, nonce: previousNonce } = await api.query.system.account(Mario);

  console.log(`${Mario} has a balance of ${previousFree}, nonce ${previousNonce}`);
  console.log(`You may leave this example running and start example 06 or transfer any value to ${Mario}`);

  // Here we subscribe to any balance changes and update the on-screen value
  api.query.system.account(Mario, ({ data: { free: currentFree }, nonce: currentNonce }) => {
    // Calculate the delta
    const change = currentFree.sub(previousFree);

    // Only display positive value changes (Since we are pulling `previous` above already,
    // the initial balance change will also be zero)
    if (!change.isZero()) {
      console.log(`New balance change of ${change}, nonce ${currentNonce}`);

      previousFree = currentFree;
      previousNonce = currentNonce;
    }
  });
}

main().catch(console.error);