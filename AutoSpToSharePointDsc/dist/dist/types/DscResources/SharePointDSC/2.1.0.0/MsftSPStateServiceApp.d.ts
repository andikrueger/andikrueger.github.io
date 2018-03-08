import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPStateServiceApp extends DscType {
    /**
     * The name of the state service app
     */
    name: string;
    /**
     * The proxy name, if not specified will be /Name of service app/ Proxy
     */
    proxyName: string;
    /**
     * The name of the database for the service app
     */
    databaseName: string;
    /**
     * The name of the database server
     */
    databaseServer: string;
    /**
     * Present if the service app should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * The database credentials for accessing the database"), EmbeddedInstance("MSFT_Credential
     */
    databaseCredentials: DscCredential;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string, databaseName: string);
}
