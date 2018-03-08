import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPWorkflowService extends DscType {
    /**
     * The URL of the Workflow Service
     */
    workflowHostUri: string;
    /**
     * The URL of the Site Collection to associate with the Workflow Service Proxy
     */
    sPSiteUrl: string;
    /**
     * Specify whether or not to allow connection to the Workflow Service over Http
     */
    allowOAuthHttp: boolean;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(workflowHostUri: string, sPSiteUrl: string);
}
