import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPDiagnosticsProvider extends DscType {
    /**
     * Name of the Diagnostics Provider to configure
     */
    name: string;
    /**
     * Sets the retention period in days
     */
    retention: number;
    /**
     * Sets the maximum retention size in bytes
     */
    maxTotalSizeInBytes: number;
    /**
     * True enables the Diagnostics Provider
     */
    enabled: boolean;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    /**
     * Present to configure the diagnostics provider"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    constructor(name: string);
}
