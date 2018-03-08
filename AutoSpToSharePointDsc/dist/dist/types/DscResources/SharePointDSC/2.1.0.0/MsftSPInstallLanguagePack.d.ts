import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPInstallLanguagePack extends DscType {
    /**
     * The directory that contains all of the SharePoint binaries
     */
    binaryDir: string;
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
    constructor(binaryDir: string);
}
