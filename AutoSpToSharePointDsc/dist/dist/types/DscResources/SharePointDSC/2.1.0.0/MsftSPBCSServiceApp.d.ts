import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPBCSServiceApp extends DscType {
    /**
     * The name of the BCS service app
     */
    name: string;
    /**
     * The name of the BCS service application proxy
     */
    proxyName: string;
    /**
     * The application pool it should run in
     */
    applicationPool: string;
    /**
     * Name of the database to create for the service app
     */
    databaseName: string;
    /**
     * Name of the database server to host the database on
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
