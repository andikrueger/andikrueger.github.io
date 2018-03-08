import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPSearchContentSource extends DscType {
    /**
     * The name of the content source
     */
    name: string;
    /**
     * The name of the search service app that this content source exists within
     */
    serviceAppName: string;
    /**
     * The type of content source - currently only SharePoint, Website and File Shares are supported"), ValueMap{"SharePoint","Website","
     * FileShare"}, Values{"SharePoint","Website","FileShare
     */
    contentSourceType: {};
    /**
     *
     */
    addresses: string[][];
    /**
     * Should the crawler index everything, just the first site or page, or a custom depth (applies to websites only)"), ValueMap{"CrawlE
     * verything","CrawlFirstOnly","Custom"}, Values{"CrawlEverything","CrawlFirstOnly","Custom
     */
    crawlSetting: {};
    /**
     * Should this content source use continuous crawl (SharePoint sites only)
     */
    continuousCrawl: boolean;
    /**
     * What is the incremental schedule for this content source"), EmbeddedInstance("MSFT_SPSearchCrawlSchedule
     */
    incrementalSchedule: {};
    /**
     * What is the full schedule for this content source"), EmbeddedInstance("MSFT_SPSearchCrawlSchedule
     */
    fullSchedule: {};
    /**
     * What is the priority on this content source"), ValueMap{"Normal","High"}, Values{"Normal","High
     */
    priority: {};
    /**
     * How many pages deep should the crawler go (-1 = unlimited, website sources only)
     */
    limitPageDepth: number;
    /**
     * How many server hops should the crawler make (-1 = unlimtied, website sources only)
     */
    limitServerHops: number;
    /**
     * Present if the source should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * Specify true if DSC is allowed to delete and recreate a content source to apply the correct settings, otherwise false will just re
     * port errors if a change can not be applied.
     */
    force: boolean;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string, serviceAppName: string, contentSourceType: {}, crawlSetting: {});
}
