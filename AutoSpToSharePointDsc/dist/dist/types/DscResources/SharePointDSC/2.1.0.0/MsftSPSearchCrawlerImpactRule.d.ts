import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPSearchCrawlerImpactRule extends DscType {
    /**
     * Search Service Application Name
     */
    serviceAppName: string;
    /**
     * The Site for the crawl impact rule
     */
    name: string;
    /**
     * The RequestLimit setting for the crawl impact rule
     */
    requestLimit: number;
    /**
     * The WaitTime setting for the crawl impact rule
     */
    waitTime: number;
    /**
     * Ensure the crawl rule is Present or Absent"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5
     */
    installAccount: DscCredential;
    constructor(serviceAppName: string, name: string);
}
