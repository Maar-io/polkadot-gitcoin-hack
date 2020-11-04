Polkadot Hello World!  [Hackathon](https://gitcoin.co/hackathon/polkadot/projects)

#Completed tasks:
- [x] 1. [Launch A Local Substrate Development Chain](#launch)
- [x] 2. [Run A Private Substrate Network](#private)
- [x] 3. [Play With Westend](#westend)
- [x] 4. [Back-End Javascript](#backend)
- [x] 5. [Front-End Javascript](#frontend)
- [x] 6. [Run a Kusama or Polkadot node](#telemetry)
- [x] 7. [Set an identity on Kusama or Polkadot's development version](#identity)
- [x] 8. [FRAME Identity: Set an identity on a local --dev chain](#frameidentity)
- [x] 9. [Forkless Upgrades](#forkless)
- [x] 10. [Using Remix And MetaMask On Moonbeam](#moonbeam)
- [x] 11. [Deploy on Moonbase Alpha using Truffle](#moonbeamtruffle)
- [x] 12. [Enable Multi-currency Support](#multicurrency)
- [x] 13. [Enable NFT Support](#nft)
- [x] 14. [Build and Run a Local Phala Network](#phala)
- [x] 15. [Smart contracts - write an ERC-20 smart contract with ink!](#erc20)
- [x] 16. [FRAME Development](#framedev)
- [x] 17. [REST APIs - Read An Account's Pending Payouts](#payouts)



## Launch A Local Substrate Development Chain <a name="launch"></a>
>Use the Substrate Node Template to launch a local development chain and use the Front-End Template to make a balance transfer and make an on-chain remark with your GitHub username.

[Solution](https://github.com/Maar-io/polkadot-gitcoin-hack/blob/main/transfer.jpg)

## Run A Private Substrate Network <a name="private"></a>
>Use Substrate to run a private local network.

[Solution](https://github.com/Maar-io/polkadot-gitcoin-hack/blob/main/PrivateNetwork.jpg)

## Play With Westend <a name="westend"></a>
>Get tokens from the Westend faucet and use the Polkadot-JS Apps UI to make a remark on the Westend chain.

[Solution](https://westend.subscan.io/extrinsic/0xeac5d9ab557dc78e638e184c24e494131b6f21ec3d7ffffd1bef74e7bf4d631f)

## Back-End Javascript <a name="backend"></a>
>Use Polkadot-JS to write a command line utility that displays information about the latest block on Kusama, Polkadot or any other Substrate-based chain. Bonus: include an option to search for a block by number (height) and/or hash.

[Solution](https://github.com/Maar-io/polkadot-gitcoin-hack/tree/main/Back-End%20Javascript)

## Front-End Javascript <a name="frontend"></a>
>Use Polkadot-JS or the Front-End Template to write a web page (hosted on GitHub pages or similar) that displays information about the latest block on Kusama, Polkadot or any other Substrate-based chain. Bonus: include a component to search for a block by number (height) and/or hash.

[Solution](https://github.com/Maar-io/substrate-front-end-template) 
[github.io](https://maar-io.github.io/substrate-front-end-template/)

## Run a Kusama or Polkadot node and add it to Telemetry <a name="telemetry"></a>
>Download the latest binary release or build Polkadot or Kusama from source, and run your node. Add it to telemetry as per the README instructions, and let us know when your node appears in the telemetry.polkadot.io list!

[Solution](https://github.com/Maar-io/polkadot-gitcoin-hack/blob/main/telemetry-kusama.jpg)

## Set an identity on Kusama or Polkadot's development version <a name="identity"></a>
>Substrate-based chains which implement the Identities pallet let users of the chain set some on-chain metadata through which to identify their accounts. Kusama and Polkadot come with identities built in, but on node-template you’d have to manually extend the chain. This challenge takes the easier route: run the --dev version of Kusama or Polkadot, and register an identity on it.

[Solution](https://github.com/Maar-io/polkadot-gitcoin-hack/blob/main/onChainIdentity.jpg)

## FRAME Identity: Set an identity on a local --dev chain [I] <a name="frameidentity"></a>
>Substrate-based chains which implement the Identities pallet let users of the chain set some on-chain metadata through which to identify their accounts. Kusama and Polkadot come with identities built in, but on node-template you have to manually extend the chain. Do it. Add the identity pallet to node template, then register an identity of an account on your local development chain.

[Solution](https://github.com/Maar-io/polkadot-gitcoin-hack/blob/main/FrameIdentityOnLocalDevChain.png)

## Forkless Upgrades [I] <a name="forkless"></a>
>Perform a forkless runtime upgrade on a local development chain.

[Solution](https://github.com/Maar-io/polkadot-gitcoin-hack/blob/main/forkless.png)

## Using Remix And MetaMask On Moonbeam [I] <a name="moonbeam"></a>
>This challenge combines a few different things, centered explicitly in MetaMask and Remix. This can be done using other tools, but we recommend these two as they provide the easiest path to victory. The idea is to deploy an ERC20 token onto Moonbase Alpha, and send at least 5 tokens from one account (referred to as account01 from now on) to another (referred to as account02).

[Solution](https://github.com/Maar-io/polkadot-gitcoin-hack/blob/main/checkContract.md)

## Deploy on Moonbase Alpha using Truffle [I] <a name="moonbeamtruffle"></a>
>This challenge focuses on using Truffle, a widely used developer tool in Ethereum, to deploy an ERC20 token contract to Moonbase Alpha (Moonbeam TestNet).

[Solution](https://github.com/Maar-io/polkadot-gitcoin-hack/blob/main/moonbaseTruffle.txt)

## Enable Multi-currency Support [I] <a name="multicurrency"></a>
>Substrate by default only supports a single token. We've developed an open runtime module library specifically orml-token pallet to support multiple tokens. For example, on Acala via this pallet, we can support aUSD (Acala Dollar stablecoin), DOT/KSM, renBTC, PolkaBTC and various other assets. Simply add this into your runtime to enable multi-currency support and starting minting your own tokens.

[Solution](https://github.com/Maar-io/substrate-multicurrency)

## Enable NFT Support [I] <a name="nft"></a>
>Substrate by default only supports a single fungible token. We've developed an open runtime module library specifically orml-nft pallet to support Non Fungible Tokens. Simply add this into your runtime to enable NFT support, and start minting NFTs 

[Solution](https://github.com/Maar-io/substrate-nft)

## Build and Run a Local Phala Network <a name="phala"></a>
>In this challenge, you are going to set up a Phala Network "Hello World" development environment, and deploy a full stack of the core blockchain and connect the Web UI to the blockchain. You will try the privacy-preserving “secret tokens” feature on your own local testnet.

[Solution](https://github.com/Maar-io/polkadot-gitcoin-hack/blob/main/Phala-network.md)
[Tweet](https://twitter.com/Maarr_io/status/1322658688776212486?s=20)

## Smart contracts - write an ERC-20 smart contract with ink! [I]<a name="erc20"></a>
>Add the Contracts pallet to the Node Template and write an ERC-20 smart contract in ink!.

[Solution](https://github.com/Maar-io/substrate-erc20/tree/master)

## FRAME Development [I] <a name="framedev"></a>
>Update the Pallet Template to include a storage item for a custom struct. Add at least one dispatchable function to interact with the new storage item. Add the necessary types to the Front-End Template to interact with the new dispatchable.

[Solution](https://github.com/Maar-io/substrate-framedev)

## REST APIs - Read An Account's Pending Payouts [A] <a name="payouts"></a>
>Read an account's pending payouts with a combination of a local instance of Sidecar and a local Kusama node.

[Solution](./pending-payouts)


