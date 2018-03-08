import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPWebAppPolicy extends DscType {
    /**
     * The URL of the web application
     */
    webAppUrl: string;
    /**
     *
     */
    members: {}[];
    /**
     *
     */
    membersToInclude: {}[];
    /**
     *
     */
    membersToExclude: {}[];
    /**
     * Include the Cache Accounts in the policy or not
     */
    setCacheAccountsPolicy: boolean;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(webAppUrl: string);
}
