import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPBlobCacheSettings extends DscType {
    /**
     * The URL of the web application
     */
    webAppUrl: string;
    /**
     * The zone of the web application for which blob cache has to be configured"), ValueMap{"Default","Intranet","Internet","Custom","Ex
     * tranet"}, Values{"Default","Intranet","Internet","Custom","Extranet
     */
    zone: {};
    /**
     * Specify if the blob cache has to be enabled
     */
    enableCache: boolean;
    /**
     * The location where the blob cache has to store its files
     */
    location: string;
    /**
     * The maximum size (in GB) of disk space the blob cache is allowed to use
     */
    maxSizeInGB: number;
    /**
     * The maximum age (in seconds) that a browser caches a blob
     */
    maxAgeInSeconds: number;
    /**
     * Specify the file types that must be stored by the blob cache
     */
    fileTypes: string;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(webAppUrl: string, zone: {}, enableCache: boolean);
}
