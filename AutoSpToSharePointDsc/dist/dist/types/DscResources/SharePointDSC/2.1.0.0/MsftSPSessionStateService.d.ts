import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPSessionStateService extends DscType {
    /**
     * The name of the database for the service
     */
    databaseName: string;
    /**
     * The name of the database server for the database
     */
    databaseServer: string;
    /**
     * Present is the state service should be enabled, absent if it should be disabled"), ValueMap{"Present","Absent"}, Values{"Present",
     * "Absent
     */
    ensure: {};
    /**
     * What is the timeout on sessions
     */
    sessionTimeout: number;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(databaseName: string, databaseServer: string);
}
