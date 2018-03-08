import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPSearchCrawlMapping extends DscType {
    /**
     * Search Service Application Name
     */
    serviceAppName: string;
    /**
     * Source URI for the crawl mapping
     */
    url: string;
    /**
     * Target URI for the crawl mapping
     */
    target: string;
    /**
     * Ensure the crawl mapping is Present or Absent"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5
     */
    installAccount: DscCredential;
    constructor(serviceAppName: string, url: string, target: string);
}
