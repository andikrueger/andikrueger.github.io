import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPProductUpdate extends DscType {
    /**
     * The name of the update setup file
     */
    setupFile: string;
    /**
     * Shutdown SharePoint services to speed up installation
     */
    shutdownServices: boolean;
    /**
     *
     */
    binaryInstallDays: {}[];
    /**
     * Specify in which time frame the installation is allowed
     */
    binaryInstallTime: string;
    /**
     * Present to install SharePoint. Absent is currently not supported"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(setupFile: string);
}
