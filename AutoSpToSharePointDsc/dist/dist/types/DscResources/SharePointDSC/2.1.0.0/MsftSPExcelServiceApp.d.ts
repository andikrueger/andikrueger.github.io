import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPExcelServiceApp extends DscType {
    /**
     * The name of the service application
     */
    name: string;
    /**
     * The name of the application pool to run the service app in
     */
    applicationPool: string;
    /**
     *
     */
    trustedFileLocations: {}[];
    /**
     * Specifies that files that are no longer used by Excel Services Application can remain in the cache for later use.
     */
    cachingOfUnusedFilesEnable: boolean;
    /**
     * Specifies that trusted workbooks and data connection files can be requested and rendered by Web Parts or pages that reside in othe
     * r HTTP domains.
     */
    crossDomainAccessAllowed: boolean;
    /**
     * Requires that encryption is used between the end-user and the server running Excel Services Application."), ValueMap{"None","Conne
     * ction"}, Values{"None","Connection
     */
    encryptedUserConnectionRequired: {};
    /**
     * Specifies the maximum number of seconds that an external data connection can remain open in the connection pool.
     */
    externalDataConnectionLifetime: number;
    /**
     * Specifies the authentication method that Excel Services Application uses to retrieve files."), ValueMap{"UseImpersonation","UseFil
     * eAccessAccount"}, Values{"UseImpersonation","UseFileAccessAccount
     */
    fileAccessMethod: {};
    /**
     * Specifies the load-balancing schema that is used by the Excel Services Application Web service application to send requests to dif
     * ferent back-end Excel Services Application computers."), ValueMap{"RoundRobin","Local","WorkbookURL"}, Values{"RoundRobin","Local"
     * ,"WorkbookURL
     */
    loadBalancingScheme: {};
    /**
     * Specifies the percentage of the maximum private bytes that can be allocated to inactive objects.
     */
    memoryCacheThreshold: number;
    /**
     * Specifies the maximum private bytes, in megabytes, that are used by Excel Services Application.
     */
    privateBytesMax: number;
    /**
     * Specifies the maximum number of sessions allowed for a user.
     */
    sessionsPerUserMax: number;
    /**
     * Specifies the maximum number of anonymous sessions allowed per site collection.
     */
    siteCollectionAnonymousSessionsMax: number;
    /**
     * Terminates Excel Services Application when an access violation occurs in the process.
     */
    terminateProcessOnAccessViolation: boolean;
    /**
     * Specifies that if a workbook causes an access violation error on Excel Services Application, all files originating from that workb
     * ook’s site collection are blocked from loading for the specified period (in seconds).
     */
    throttleAccessViolationsPerSiteCollection: number;
    /**
     * Specifies that the application ID that is used to look up the unattended service account credentials from the secure storage servi
     * ce that is specified by the UnattendedAccountSecureServiceAppName parameter.
     */
    unattendedAccountApplicationId: string;
    /**
     * Specifies the maximum amount of time, in minutes, that objects not currently used in a session are kept in the memory cache.
     */
    unusedObjectAgeMax: number;
    /**
     * Specifies the local file system location of the cache that is used to store workbooks that are used by Excel Services Application.
     *
     */
    workbookCache: string;
    /**
     * Specifies the maximum allowable size, in megabytes, of an individual session.
     */
    workbookCacheSizeMax: number;
    /**
     * Present ensures service app exists, absent ensures it is removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string, applicationPool: string);
}
