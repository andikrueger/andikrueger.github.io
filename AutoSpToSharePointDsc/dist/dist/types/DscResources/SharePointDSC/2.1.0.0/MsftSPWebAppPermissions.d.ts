import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPWebAppPermissions extends DscType {
    /**
     * The url of the web application
     */
    webAppUrl: string;
    /**
     *
     */
    listPermissions: {}[];
    /**
     *
     */
    sitePermissions: {}[];
    /**
     *
     */
    personalPermissions: {}[];
    /**
     * Set all permissions
     */
    allPermissions: boolean;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(webAppUrl: string);
}
