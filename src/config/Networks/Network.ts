import { Chains } from '../Enums/Chains';

export abstract class Network {
    private static networks: Record<string, Network> = {};
    readonly contracts: Record<string, string>;
    readonly name: string;

    constructor(contracts: Record<string, string>, name: Chains) {
        this.contracts = contracts;
        this.name = name;
        Network.networks[name] = this;
    }

    static getNetworkDetail(name: string | undefined) {
        if (!name) return null;
        if (Object.values(Chains).includes(name as Chains)) {
            return Network.networks[name];
        }
        return null;
    }
}
