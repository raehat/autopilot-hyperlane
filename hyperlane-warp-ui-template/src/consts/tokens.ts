import { WarpTokenConfig } from '../features/tokens/types';

export const tokenList: WarpTokenConfig = [
  // Example collateral token for an EVM chain
  {
    "chainId": 31337,
    "name": "ether",
    "symbol": "ETH",
    "decimals": 18,
    "type": "native",
    "hypNativeAddress": "0x49fd2BE640DB2910c2fAb69bB8531Ab6E76127ff"
  },
];
