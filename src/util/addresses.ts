import { Token } from '@uniswap/sdk-core';
import { FACTORY_ADDRESS } from '@uniswap/v3-sdk';

import { ChainId, NETWORKS_WITH_SAME_UNISWAP_ADDRESSES } from './chains';

const CELO_V3_CORE_FACTORY_ADDRESSES =
  '0xAfE208a311B21f13EF87E33A90049fC17A7acDEc';
const CELO_QUOTER_ADDRESSES = '0x82825d0554fA07f7FC52Ab63c961F330fdEFa8E8';
const CELO_MULTICALL_ADDRESS = '0x633987602DE5C4F337e3DbF265303A1080324204';

const ARBITRUM_GOERLI_V3_CORE_FACTORY_ADDRESSES =
  '0x4893376342d5D7b3e31d4184c08b265e5aB2A3f6';
const ARBITRUM_GOERLI_QUOTER_ADDRESSES =
  '0x1dd92b83591781D0C6d98d07391eea4b9a6008FA';
const ARBITRUM_GOERLI_MULTICALL_ADDRESS =
  '0x8260CB40247290317a4c062F3542622367F206Ee';

const OPTIMISM_GOERLI_V3_CORE_FACTORY_ADDRESSES =
  '0xB656dA17129e7EB733A557f4EBc57B76CFbB5d10';
const OPTIMISM_GOERLI_QUOTER_ADDRESSES =
  '0x9569CbA925c8ca2248772A9A4976A516743A246F';
const OPTIMISM_GOERLI_MULTICALL_ADDRESS =
  '0x07F2D8a2a02251B62af965f22fC4744A5f96BCCd';

const BSC_V3_CORE_FACTORY_ADDRESSES =
  '0xd5363C30A47b4e4BdDfa5be8Ab7d3afFA9B493E7';
const BSC_QUOTER_ADDRESSES = '0xa9A2Bb5bBA0D1dB8dbec94d214Ea1A721AAdDc1b';
const BSC_MULTICALL_ADDRESS = '0x604Cc0390D6637E41D2D0050bEC8f9282d9aBa75';
export const BSC_TICK_LENS_ADDRESS =
  '0x51FEc0ad12da6D7c6F05351D1aBfB621CF050345';
export const BSC_NONFUNGIBLE_POSITION_MANAGER_ADDRESS =
  '0xd506A7DD257F969C276e4dc84d66bAeB8e84e316';
export const BSC_SWAP_ROUTER_02_ADDRESS =
  '0xc2b23BBEE479B70E4Fbca556eD73311cE8D253A6';
export const BSC_V3_MIGRATOR_ADDRESS =
  '0x32681814957e0C13117ddc0c2aba232b5c9e760f';

export const BSC_TESTNET_V3_CORE_FACTORY_ADDRESS = '0xB3Cc6b973C742C268AfC7A41A27bA37fC6B87e31';
export const BSC_TESTNET_QUOTER_ADDRESSES = '0x29707a99AD172b81cE40Aca46B187D510bBA1Db2';
export const BSC_TESTNET_MULTICALL_ADDRESS = '0xCCF5CCb007E88c80f9EB88420Ca774ca1C2eFA12';
export const BSC_TESTNET_TICK_LENS_ADDRESS = '0x15Be4B02632C93E8d4c641781863405B1Db1A0B6';
export const BSC_TESTNET_SWAP_ROUTER_02_ADDRESS = '0xFCfe5FfD5370b5E3bE40e941059c93A28404B575';
export const BSC_TESTNET_NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0x7878747755ddc2a4387747FcE9950c3E6bd2f9a7';
export const BSC_TESTNET_POOL_DEPLOYER_ADDRESS = '0x5e86CFA7737aAF75a0Eda45DbCdF6b7a3DD1746a';

const MOONBASE_ALPHA_V3_CORE_FACTORY_ADDRESS = '0x48FaebfF61BE1F1F056D4f3Af70aab8338d74086';
const MOONBASE_ALPHA_QUOTER_ADDRESSES = '0x435Ce8Be4bFda8857826438764Bb12964Fde2560';
const MOONBASE_ALPHA_MULTICALL_ADDRESS = '0xB5113ec3370C9c560187f7929386765B289E710b';
const MOONBASE_ALPHA_SWAP_ROUTER_02_ADDRESS = '0x5ce9188dBb7B0D10BfB35E224d431eC6527BA93E';
const MOONBASE_ALPHA_POOL_DEPLOYER = '0xf447c13280d69acd7e5df0866864cb2c812100be'


export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(FACTORY_ADDRESS),
  [ChainId.CELO]: CELO_V3_CORE_FACTORY_ADDRESSES,
  [ChainId.CELO_ALFAJORES]: CELO_V3_CORE_FACTORY_ADDRESSES,
  [ChainId.OPTIMISM_GOERLI]: OPTIMISM_GOERLI_V3_CORE_FACTORY_ADDRESSES,
  [ChainId.ARBITRUM_GOERLI]: ARBITRUM_GOERLI_V3_CORE_FACTORY_ADDRESSES,
  [ChainId.BSC]: BSC_V3_CORE_FACTORY_ADDRESSES,
  [ChainId.BSC_TESTNET]: BSC_TESTNET_V3_CORE_FACTORY_ADDRESS,
  [ChainId.MOONBEAM]: '',
  [ChainId.MOONBASE_ALPHA]: MOONBASE_ALPHA_V3_CORE_FACTORY_ADDRESS,
  // TODO: Gnosis + Moonbeam contracts to be deployed
};

export const QUOTER_V2_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x61fFE014bA17989E743c5F6cB21bF9697530B21e'),
  [ChainId.CELO]: CELO_QUOTER_ADDRESSES,
  [ChainId.CELO_ALFAJORES]: CELO_QUOTER_ADDRESSES,
  [ChainId.OPTIMISM_GOERLI]: OPTIMISM_GOERLI_QUOTER_ADDRESSES,
  [ChainId.ARBITRUM_GOERLI]: ARBITRUM_GOERLI_QUOTER_ADDRESSES,
  [ChainId.BSC]: BSC_QUOTER_ADDRESSES,
  [ChainId.BSC_TESTNET]: BSC_TESTNET_QUOTER_ADDRESSES,
  [ChainId.MOONBASE_ALPHA]: MOONBASE_ALPHA_QUOTER_ADDRESSES,
  // TODO: Gnosis + Moonbeam contracts to be deployed
};

export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = {
  [ChainId.MAINNET]: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E',
  [ChainId.RINKEBY]: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E',
  [ChainId.ROPSTEN]: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E',
  [ChainId.GÖRLI]: '0xBa60b6e6fF25488308789E6e0A65D838be34194e',
};

export const UNISWAP_MULTICALL_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984'),
  [ChainId.CELO]: CELO_MULTICALL_ADDRESS,
  [ChainId.CELO_ALFAJORES]: CELO_MULTICALL_ADDRESS,
  [ChainId.OPTIMISM_GOERLI]: OPTIMISM_GOERLI_MULTICALL_ADDRESS,
  [ChainId.ARBITRUM_GOERLI]: ARBITRUM_GOERLI_MULTICALL_ADDRESS,
  [ChainId.BSC]: BSC_MULTICALL_ADDRESS,
  [ChainId.BSC_TESTNET]: BSC_TESTNET_MULTICALL_ADDRESS,
  [ChainId.MOONBASE_ALPHA]: MOONBASE_ALPHA_MULTICALL_ADDRESS,
  // TODO: Gnosis + Moonbeam contracts to be deployed
};

export const POOL_DEPLOYER_ADDRESSES: AddressMap = {
  [ChainId.BSC_TESTNET]: BSC_TESTNET_POOL_DEPLOYER_ADDRESS,
  [ChainId.MOONBASE_ALPHA]: MOONBASE_ALPHA_POOL_DEPLOYER,
}

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number) => {
  if (chainId == ChainId.BSC) {
    return BSC_SWAP_ROUTER_02_ADDRESS;
  }
  if (chainId == ChainId.BSC_TESTNET) {
    return BSC_TESTNET_SWAP_ROUTER_02_ADDRESS;
  }
  if (chainId == ChainId.MOONBASE_ALPHA) {
    return MOONBASE_ALPHA_SWAP_ROUTER_02_ADDRESS;
  }
  return '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45';
};

export const OVM_GASPRICE_ADDRESS =
  '0x420000000000000000000000000000000000000F';
export const ARB_GASINFO_ADDRESS = '0x000000000000000000000000000000000000006C';
export const TICK_LENS_ADDRESS = '0xbfd8137f7d1516D3ea5cA83523914859ec47F573';
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESS =
  '0xC36442b4a4522E871399CD717aBDD847Ab11FE88';
export const V3_MIGRATOR_ADDRESS = '0xA5644E29708357803b5A882D272c41cC0dF92B34';
export const MULTICALL2_ADDRESS = '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696';

export type AddressMap = { [chainId: number]: string };

export function constructSameAddressMap<T extends string>(
  address: T,
  additionalNetworks: ChainId[] = []
): { [chainId: number]: T } {
  return NETWORKS_WITH_SAME_UNISWAP_ADDRESSES.concat(
    additionalNetworks
  ).reduce<{
    [chainId: number]: T;
  }>((memo, chainId) => {
    memo[chainId] = address;
    return memo;
  }, {});
}

export const WETH9: {
  [chainId in Exclude<
    ChainId,
    | ChainId.POLYGON
    | ChainId.POLYGON_MUMBAI
    | ChainId.CELO
    | ChainId.CELO_ALFAJORES
    | ChainId.GNOSIS
    | ChainId.MOONBEAM
    | ChainId.BSC
    | ChainId.BSC_TESTNET
    | ChainId.MOONBASE_ALPHA
  >]: Token;
} = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ROPSTEN]: new Token(
    ChainId.ROPSTEN,
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.RINKEBY]: new Token(
    ChainId.RINKEBY,
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.GÖRLI]: new Token(
    ChainId.GÖRLI,
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.KOVAN]: new Token(
    ChainId.KOVAN,
    '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.OPTIMISM]: new Token(
    ChainId.OPTIMISM,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.OPTIMISM_GOERLI]: new Token(
    ChainId.OPTIMISM_GOERLI,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.OPTIMISTIC_KOVAN]: new Token(
    ChainId.OPTIMISTIC_KOVAN,
    '0x4200000000000000000000000000000000000006',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ARBITRUM_ONE]: new Token(
    ChainId.ARBITRUM_ONE,
    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ARBITRUM_RINKEBY]: new Token(
    ChainId.ARBITRUM_RINKEBY,
    '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.ARBITRUM_GOERLI]: new Token(
    ChainId.ARBITRUM_GOERLI,
    '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3',
    18,
    'WETH',
    'Wrapped Ether'
  ),
};
