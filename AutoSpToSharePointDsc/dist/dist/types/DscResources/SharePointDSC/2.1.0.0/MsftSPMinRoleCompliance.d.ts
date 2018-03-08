import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPMinRoleCompliance extends DscType {
    /**
     * Should the state be set to compliant"), ValueMap{"Compliant", "NonCompliant"}, Values{"Compliant", "NonCompliant
     */
    state: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(state: {});
}
