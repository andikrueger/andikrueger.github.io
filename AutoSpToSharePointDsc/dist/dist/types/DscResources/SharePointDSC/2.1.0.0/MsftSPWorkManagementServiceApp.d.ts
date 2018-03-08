import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPWorkManagementServiceApp extends DscType {
    /**
     * The name of the work management service application
     */
    name: string;
    /**
     * The proxy name, if not specified will be /Name of service app/ Proxy
     */
    proxyName: string;
    /**
     * The name of the application pool this will run in
     */
    applicationPool: string;
    /**
     * The minimum amount of time bween EWS sync subscription searches
     */
    minimumTimeBetweenEwsSyncSubscriptionSearches: number;
    /**
     * The minimum time between provider refreshes
     */
    minimumTimeBetweenProviderRefreshes: number;
    /**
     * The minimum time between search queries
     */
    minimumTimeBetweenSearchQueries: number;
    /**
     * The number of subscription syncronisations per EWS sync run
     */
    numberOfSubscriptionSyncsPerEwsSyncRun: number;
    /**
     * How many users will EWS calls include at once
     */
    numberOfUsersEwsSyncWillProcessAtOnce: number;
    /**
     * How many users are included in a batch for EWS
     */
    numberOfUsersPerEwsSyncBatch: number;
    /**
     * Present to ensure the app exists, Absent to ensure it is removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string);
}
