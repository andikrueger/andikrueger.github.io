import { DscType } from '../../Dsc';
export declare class SharePointNode {
    serverName: string;
    installSteps: DscType[];
    constructor($serverName: string);
    addStep: (installStep: DscType, dependsOn?: string) => void;
    toString: () => string;
}
