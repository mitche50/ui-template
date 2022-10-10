import { Chains } from 'config/Enums/Chains';

import { Network } from './Network';

const contracts: Record<string, string> = {
    weth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
};

export class Ethereum extends Network {
    constructor() {
        super(contracts, Chains.Ethereum);
    }
}
