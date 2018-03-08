import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPQuotaTemplate extends DscType {
    /**
     * The name of the quota template
     */
    name: string;
    /**
     * The maximum storage for sites of this template in MB
     */
    storageMaxInMB: number;
    /**
     * The amount of storage for sites of this template that triggers a warning
     */
    storageWarningInMB: number;
    /**
     * The maximum number of performance points for sandbox solutions for this template
     */
    maximumUsagePointsSolutions: number;
    /**
     * The warning number of performance points for sandbox solutions for this template
     */
    warningUsagePointsSolutions: number;
    /**
     * Present to create this template, absent to ensure it does not exist"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string);
}
