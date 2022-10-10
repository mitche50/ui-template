import { Ethereum } from './eth.network';
import { Goerli } from './goerli.network';
import { Network } from './Network';

export const supportedNetworks: Network[] = [new Ethereum(), new Goerli()];
