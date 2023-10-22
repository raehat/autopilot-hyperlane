import { ChainMap, ChainMetadata, ProtocolType } from '@hyperlane-xyz/sdk';
import 'dotenv/config'

// import { chainMetadata } from '@hyperlane-xyz/sdk';
// A map of chain names to ChainMetadata
export const chains: ChainMap<ChainMetadata> = {
  // ----------- Add your chains here -----------------
  anvil1: {
    name: process.env.chain1name || 'anvil1',
    protocol: ProtocolType.Ethereum,
    // anvil default chain id
    chainId : parseInt(process.env.chain1id || "", 31337) || 31337,
    // Used to configure a Warp Route to bridge anvil1 ETH
    // to anvil2 in CI tests.
    nativeToken: {
      name: 'ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [
      {
        http: process.env.chain1rpc || 'http://127.0.0.1:8545',
      },
    ],
    // You can set overrides for transaction fields here
    // transactionOverrides: {
    //   gasLimit: 1000000
    // },
  },
  anvil2: {
    name: process.env.chain2name || 'anvil2',
    protocol: ProtocolType.Ethereum,
    chainId : parseInt(process.env.chain2id || "", 31338) || 31338,
    rpcUrls: [
      {
        http: process.env.chain2rpc || 'http://127.0.0.1:8555',
      },
    ],
  },
  // --------------------------------------------------
  // You can also override the default chain metadata (completely)
  // ethereum: {
  //   ...chainMetadata.ethereum,
  //   publicRpcUrls: [
  //     {
  //       http: 'my.custom.rpc.url',
  //     }
  //   ],
  // }
};
