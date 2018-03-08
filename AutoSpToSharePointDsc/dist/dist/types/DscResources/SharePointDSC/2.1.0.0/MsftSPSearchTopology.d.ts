import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPSearchTopology extends DscType {
    /**
     * The name of the search service application for this topology
     */
    serviceAppName: string;
    /**
     *
     */
    admin: string[][];
    /**
     *
     */
    crawler: string[][];
    /**
     *
     */
    contentProcessing: string[][];
    /**
     *
     */
    analyticsProcessing: string[][];
    /**
     *
     */
    queryProcessing: string[][];
    /**
     *
     */
    indexPartition: string[][];
    /**
     * The local directory servers will use to store the first index partition
     */
    firstPartitionDirectory: string;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(serviceAppName: string, firstPartitionDirectory: string);
}
