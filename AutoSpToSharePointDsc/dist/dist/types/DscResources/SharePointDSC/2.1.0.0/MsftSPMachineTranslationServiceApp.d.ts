import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPMachineTranslationServiceApp extends DscType {
    /**
     * Specifies the name of the service application.
     */
    name: string;
    /**
     * The proxy name, if not specified will be /Name of service app/ Proxy
     */
    proxyName: string;
    /**
     * Specifies the name of the database for the service application.
     */
    databaseName: string;
    /**
     * Specifies the name of the database server for the service application.
     */
    databaseServer: string;
    /**
     * Specifies the application pool to use with the service application.
     */
    applicationPool: string;
    /**
     * Present ensures service app exists, absent ensures it is removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5
     */
    installAccount: DscCredential;
    constructor(name: string, databaseName: string, databaseServer: string, applicationPool: string);
}
