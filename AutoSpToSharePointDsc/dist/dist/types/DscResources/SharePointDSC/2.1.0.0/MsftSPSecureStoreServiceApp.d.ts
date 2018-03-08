import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPSecureStoreServiceApp extends DscType {
    /**
     * The name of the secure store service app
     */
    name: string;
    /**
     * The proxy name, if not specified will be /Name of service app/ Proxy
     */
    proxyName: string;
    /**
     * The name of the application pool it will run in
     */
    applicationPool: string;
    /**
     * Is auditing enabled for this service app
     */
    auditingEnabled: boolean;
    /**
     * What is the maximum size of the audit log in MB
     */
    auditlogMaxSize: number;
    /**
     * The name of the database for the service app
     */
    databaseName: string;
    /**
     * The name of the database server to host the database
     */
    databaseServer: string;
    /**
     * The name of the database server hosting a failover instance of the database
     */
    failoverDatabaseServer: string;
    /**
     * Is partition mode enabled for this service app
     */
    partitionMode: boolean;
    /**
     * Is sharing enabled for this service app
     */
    sharing: boolean;
    /**
     * What type of authentication should be used to access the database"), ValueMap{"Windows","SQL"}, Values{"Windows","SQL
     */
    databaseAuthenticationType: {};
    /**
     * Present if the service app should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * What SQL credentials should be used to access the database"), EmbeddedInstance("MSFT_Credential
     */
    databaseCredentials: DscCredential;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string, applicationPool: string, auditingEnabled: boolean);
}
