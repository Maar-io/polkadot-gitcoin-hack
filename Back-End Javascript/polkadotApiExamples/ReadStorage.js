// Import the API
const { ApiPromise, WsProvider } = require('@polkadot/api');

// my account address on Polkadot
const MARIO = '14irTviGBPzG6HPkYrQDQbF3pZCcrKW3MZ1ygbvx6xZFELpu';

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

  // Make our basic chain state/storage queries, all in one go
  const [{ nonce: accountNonce }, now, validators] = await Promise.all([
    api.query.system.account(MARIO),
    api.query.timestamp.now(),
    api.query.session.validators()
  ]);

  console.log(`accountNonce(${MARIO}) ${accountNonce}`);
  console.log(`last block timestamp ${now.toNumber()}`);
  /*
  if (validators && validators.length > 0) {
    // Retrieve the balances for all validators
    const validatorBalances = await Promise.all(
      validators.map((authorityId) =>
        api.query.system.account(authorityId)
      )
    );

    // Print out the authorityIds and balances of all validators
    console.log('validators', validators.map((authorityId, index) => ({
      address: authorityId.toString(),
      balance: validatorBalances[index].data.free.toHuman(),
      nonce: validatorBalances[index].nonce.toHuman()
    })));
  }
  */
}

main().catch(console.error).finally(() => process.exit());