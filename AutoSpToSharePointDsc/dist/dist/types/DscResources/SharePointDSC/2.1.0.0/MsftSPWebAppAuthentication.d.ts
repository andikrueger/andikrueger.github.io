import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPWebAppAuthentication extends DscType {
    /**
     * The URL of the web application
     */
    webAppUrl: string;
    /**
     *
     */
    default: {}[];
    /**
     *
     */
    intranet: {}[];
    /**
     *
     */
    internet: {}[];
    /**
     *
     */
    extranet: {}[];
    /**
     *
     */
    custom: {}[];
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(webAppUrl: string);
}
