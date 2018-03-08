import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPPerformancePointServiceApp extends DscType {
    /**
     * The name of the service application
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
     * The name of the database for the service app
     */
    databaseName: string;
    /**
     * The name of the database server to host the database
     */
    databaseServer: string;
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
