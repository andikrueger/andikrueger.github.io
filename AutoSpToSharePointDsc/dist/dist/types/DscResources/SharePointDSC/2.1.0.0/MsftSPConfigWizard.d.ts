import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPConfigWizard extends DscType {
    /**
     * Present to install SharePoint. Absent is currently not supported"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     *
     */
    databaseUpgradeDays: {}[];
    /**
     * Specify in which time frame running the Configuration Wizard is allowed
     */
    databaseUpgradeTime: string;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(ensure: {});
}
