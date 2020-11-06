// Import the API
const { ApiPromise, WsProvider } = require('@polkadot/api');

async function main () {
  // Create a new instance of the api
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

  // Subscribe to chain updates and log the current block number on update.
  const unsubscribe = await api.rpc.chain.subscribeNewHeads((header) => {
    console.log(`Chain is at block: #${header.number}`);
  });

  // In this example we're calling the unsubscribe() function that is being
  // returned by the api call function after 20s.
  setTimeout(() => {
    unsubscribe();
    console.log('Unsubscribed');
    process.exit(0);
  }, 10000);
}

main().catch(console.error);