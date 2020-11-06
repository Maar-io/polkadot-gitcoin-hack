// Required imports
const { ApiPromise, WsProvider } = require('@polkadot/api');

// input parameter for block number
const blockNumber = process.argv[2];

async function main () {
  // Initialise the provider to connect to the polkadot node
  const wsProvider = new WsProvider('wss://rpc.polkadot.io');

  // Create the API and wait until ready
  const api = await ApiPromise.create({ provider: wsProvider });

  // Retrieve the chain & node information information via rpc calls
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version()
  ]);

  console.log(`You are connected to chain: ${chain} 
                    nodeName: ${nodeName} 
                    version: ${nodeVersion}\n`);

  if (blockNumber)
  {
      console.log("Get blockNumber " + blockNumber);
      const blockHash = await api.rpc.chain.getBlockHash(blockNumber);
      const block = await api.rpc.chain.getBlock(blockHash);
      console.log(block.toHuman());
  }
  else  
  { 
      const header = await api.rpc.chain.getHeader();
      console.log("Get latest blockNumber " + header.number);
      const blockHash = await api.rpc.chain.getBlockHash();
      const block = await api.rpc.chain.getBlock(blockHash);
      console.log(block.toHuman());
  }
}

main().catch(console.error).finally(() => process.exit());