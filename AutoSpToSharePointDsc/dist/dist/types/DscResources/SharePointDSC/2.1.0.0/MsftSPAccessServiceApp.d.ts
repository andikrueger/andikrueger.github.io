import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPAccessServiceApp extends DscType {
    /**
     * The name of the service application
     */
    name: string;
    /**
     * The name of the application pool to run the service app in
     */
    applicationPool: string;
    /**
     * The name of the database server to host Access Services databases
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
    constructor(name: string, applicationPool: string, databaseServer: string);
}
