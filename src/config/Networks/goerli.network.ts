import { Chains } from 'config/Enums/Chains';

import { Network } from './Network';

const contracts = {
    weth: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
};

export class Goerli extends Network {
    constructor() {
        super(contracts, Chains.Goerli);
    }
}
