import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPProjectServerUserSyncSettings extends DscType {
    /**
     * The default zone URL of the Project site to set user sync settings for
     */
    url: string;
    /**
     * Enable Project Web App Sync
     */
    enableProjectWebAppSync: boolean;
    /**
     * Enable Project Site Sync
     */
    enableProjectSiteSync: boolean;
    /**
     * Enable Project Site Sync for SharePoint Task List Projects
     */
    enableProjectSiteSyncForSPTaskLists: boolean;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(url: string, enableProjectWebAppSync: boolean, enableProjectSiteSync: boolean, enableProjectSiteSyncForSPTaskLists: boolean);
}
