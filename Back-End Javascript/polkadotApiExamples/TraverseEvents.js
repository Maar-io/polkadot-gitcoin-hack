// Import the API
const { ApiPromise, WsProvider } = require('@polkadot/api');

async function main () {
  // Create our API with a default connection to the local node
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

  // Subscribe to system events via storage
  api.query.system.events((events) => {
    console.log(`\nReceived ${events.length} events:`);

    // Loop through the Vec<EventRecord>
    events.forEach((record) => {
      // Extract the phase, event and the event types
      const { event, phase } = record;
      const types = event.typeDef;

      // Show what we are busy with
      console.log(`\t${event.section}:${event.method}:: (phase=${phase.toString()})`);
      console.log(`\t\t${event.meta.documentation.toString()}`);

      // Loop through each of the parameters, displaying the type and data
      event.data.forEach((data, index) => {
        console.log(`\t\t\t${types[index].type}: ${data.toString()}`);
      });
    });
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(-1);
});