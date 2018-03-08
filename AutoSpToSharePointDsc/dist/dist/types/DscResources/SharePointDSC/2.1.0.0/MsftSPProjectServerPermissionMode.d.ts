import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPProjectServerPermissionMode extends DscType {
    /**
     * The default zone URL of the Project site to set permissions for
     */
    url: string;
    /**
     * What permission mode should PWA use"), ValueMap{"SharePoint","ProjectServer"}, Values{"SharePoint","ProjectServer
     */
    permissionMode: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(url: string, permissionMode: {});
}
