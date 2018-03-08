import { DscCredential } from './index';
export declare abstract class DscType {
    dependsOn: string;
    psDscRunAsCredential: DscCredential;
    private _dscResourceId;
    private _dscResourceType;
    constructor();
    readonly Name: string;
    readonly DependanceName: string;
    toString: () => string;
}
