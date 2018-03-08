import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPUserProfileServiceApp extends DscType {
    /**
     * The name of the user profile service
     */
    name: string;
    /**
     * The proxy name, if not specified will be /Name of service app/ Proxy
     */
    proxyName: string;
    /**
     * The name of the application pool to run the service app in
     */
    applicationPool: string;
    /**
     * The URL of the my site host collection
     */
    mySiteHostLocation: string;
    /**
     * The name of the profile database
     */
    profileDBName: string;
    /**
     * The name of the server to host the profile database
     */
    profileDBServer: string;
    /**
     * The name of the social database
     */
    socialDBName: string;
    /**
     * The name of the database server to host the social database
     */
    socialDBServer: string;
    /**
     * The name of the sync database
     */
    syncDBName: string;
    /**
     * The name of the database server to host the sync database
     */
    syncDBServer: string;
    /**
     * Whether Farm should resolve NetBIOS domain names
     */
    enableNetBIOS: boolean;
    /**
     * Specifies if the service application should be configured to use AD Import
     */
    noILMUsed: boolean;
    /**
     * Present if the service app should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string, applicationPool: string);
}
