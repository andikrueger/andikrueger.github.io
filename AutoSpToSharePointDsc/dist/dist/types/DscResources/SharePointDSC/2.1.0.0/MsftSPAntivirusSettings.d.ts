import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPAntivirusSettings extends DscType {
    /**
     * Should documents be scanned before being downloaded
     */
    scanOnDownload: boolean;
    /**
     * Should documents be scanned on upload
     */
    scanOnUpload: boolean;
    /**
     * Should documents that are infected be allowed to be downloaded
     */
    allowDownloadInfected: boolean;
    /**
     * Should infected documents be handed to the AV engine to attempt cleaning
     */
    attemptToClean: boolean;
    /**
     * What is the timeout for an AV scan in seconds
     */
    timeoutDuration: number;
    /**
     * How many concurrent threads should the AV engine be able to run on a server
     */
    numberOfThreads: number;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(scanOnDownload: boolean);
}
