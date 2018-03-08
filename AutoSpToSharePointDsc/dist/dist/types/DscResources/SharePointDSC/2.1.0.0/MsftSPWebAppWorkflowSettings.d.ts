import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPWebAppWorkflowSettings extends DscType {
    /**
     * The URL of the web application
     */
    url: string;
    /**
     * Are external workflow participants enabled in the web app
     */
    externalWorkflowParticipantsEnabled: boolean;
    /**
     * Are user defined workflows enabled in this web app
     */
    userDefinedWorkflowsEnabled: boolean;
    /**
     * Are documents sent via email to external participants of workflow
     */
    emailToNoPermissionWorkflowParticipantsEnable: boolean;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(url: string);
}
