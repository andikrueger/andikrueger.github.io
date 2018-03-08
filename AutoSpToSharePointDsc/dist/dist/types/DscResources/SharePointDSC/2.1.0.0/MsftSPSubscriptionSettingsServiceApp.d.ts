import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPSubscriptionSettingsServiceApp extends DscType {
    /**
     * The name of the subscription settings service app
     */
    name: string;
    /**
     * The name of the application pool the service app runs in
     */
    applicationPool: string;
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
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string, applicationPool: string);
}
