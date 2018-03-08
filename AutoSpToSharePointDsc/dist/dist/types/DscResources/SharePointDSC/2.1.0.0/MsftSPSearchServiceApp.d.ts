import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPSearchServiceApp extends DscType {
    /**
     * The name of the search service application
     */
    name: string;
    /**
     * The proxy name, if not specified will be /Name of service app/ Proxy
     */
    proxyName: string;
    /**
     * The application pool that it should run in
     */
    applicationPool: string;
    /**
     * The server that host the databases for this service application
     */
    databaseServer: string;
    /**
     * The name of the database (noting that some search databases will use this as a prefix)
     */
    databaseName: string;
    /**
     * Present if the service app should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * The URL of the enterprise search center site collection
     */
    searchCenterUrl: string;
    /**
     * Should this search service application be a cloud based service app
     */
    cloudIndex: boolean;
    /**
     * The default content access account for this search service app"), EmbeddedInstance("MSFT_Credential
     */
    defaultContentAccessAccount: DscCredential;
    /**
     * Sets the windows services for search to run as this account"), EmbeddedInstance("MSFT_Credential
     */
    windowsServiceAccount: DscCredential;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string, applicationPool: string);
}
