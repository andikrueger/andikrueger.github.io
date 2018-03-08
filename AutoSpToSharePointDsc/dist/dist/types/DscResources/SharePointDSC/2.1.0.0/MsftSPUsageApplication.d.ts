import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPUsageApplication extends DscType {
    /**
     * The name of the service application
     */
    name: string;
    /**
     * Present if the service app should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    /**
     * The name of the database for the service app
     */
    databaseName: string;
    /**
     * The name of the database server
     */
    databaseServer: string;
    /**
     * The credentials to use to access the database"), EmbeddedInstance("MSFT_Credential
     */
    databaseCredentials: DscCredential;
    /**
     * The name of the failover database server
     */
    failoverDatabaseServer: string;
    /**
     * The time in minutes to cut over to new log files
     */
    usageLogCutTime: number;
    /**
     * The location on each server to store the log files
     */
    usageLogLocation: string;
    /**
     * The maximum file size for log files in KB
     */
    usageLogMaxFileSizeKB: number;
    /**
     * The total space of all log files on disk in GB
     */
    usageLogMaxSpaceGB: number;
    constructor(name: string);
}
