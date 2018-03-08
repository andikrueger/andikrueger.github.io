import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPWebAppPeoplePickerSettings extends DscType {
    /**
     * The URL of the web application
     */
    webAppUrl: string;
    /**
     * Sets a customized query filter to send to Active Directory
     */
    activeDirectoryCustomFilter: string;
    /**
     * Sets the custom query that is sent to Active Directory
     */
    activeDirectoryCustomQuery: string;
    /**
     * Sets the time-out in seconds when a query is issued to Active Directory
     */
    activeDirectorySearchTimeout: number;
    /**
     * Specifies whether to search only the current site collection
     */
    onlySearchWithinSiteCollection: boolean;
    /**
     *
     */
    searchActiveDirectoryDomains: {}[];
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(webAppUrl: string);
}
