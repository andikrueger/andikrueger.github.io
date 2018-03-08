import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPAccessServices2010 extends DscType {
    /**
     * The name of the service application
     */
    name: string;
    /**
     * The name of the application pool to run the service app in
     */
    applicationPool: string;
    /**
     * Present ensures service app exists, absent ensures it is removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run thsi resource as, use PsDscRunAsCredential if using PowerShell 5
     */
    installAccount: DscCredential;
    constructor(name: string, applicationPool: string);
}
