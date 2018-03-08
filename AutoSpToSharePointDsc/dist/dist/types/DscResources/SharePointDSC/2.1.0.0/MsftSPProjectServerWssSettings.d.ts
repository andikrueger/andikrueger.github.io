import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPProjectServerWssSettings extends DscType {
    /**
     * The default zone URL of the Project site to set WSS settings for
     */
    url: string;
    /**
     * How should new SharePoint sites be created?"), ValueMap{"AutoCreate","UserChoice","DontCreate"}, Values{"AutoCreate","UserChoice",
     * "DontCreate
     */
    createProjectSiteMode: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(url: string, createProjectSiteMode: {});
}
