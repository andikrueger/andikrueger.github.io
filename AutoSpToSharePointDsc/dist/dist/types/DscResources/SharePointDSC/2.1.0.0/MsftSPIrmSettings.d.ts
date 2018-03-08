import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPIrmSettings extends DscType {
    /**
     * Enable or Disable IRM on this farm"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * Use the RMS server published in this farm's Active Directory
     */
    useADRMS: boolean;
    /**
     * Use the specified RMS server, must provide in URL format
     */
    rMSserver: string;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(ensure: {});
}
