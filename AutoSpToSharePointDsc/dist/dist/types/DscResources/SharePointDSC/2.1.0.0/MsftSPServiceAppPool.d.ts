import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPServiceAppPool extends DscType {
    /**
     * The name of application pool
     */
    name: string;
    /**
     * The name of the managed account to run this service account as
     */
    serviceAccount: string;
    /**
     * Present if the service app pool should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string, serviceAccount: string);
}
