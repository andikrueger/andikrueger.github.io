import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPLogLevel extends DscType {
    /**
     * Log Item Name")] String Name;     [Key, Description("Friendly Name used to reference this collection of log level settings
     */
    name: string;
    /**
     *
     */
    sPLogLevelSetting: {}[];
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string);
}
