import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPSearchIndexPartition extends DscType {
    /**
     * The number of the partition in this farm
     */
    index: number;
    /**
     *
     */
    servers: string[][];
    /**
     * The directory that the index should use locally on each server to store data
     */
    rootDirectory: string;
    /**
     * The name of the search service application
     */
    serviceAppName: string;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(index: number, serviceAppName: string);
}
