import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPWebApplicationAppDomain extends DscType {
    /**
     * The domain for apps in this web app zone
     */
    appDomain: string;
    /**
     * The URL of the web application to set the app domain for
     */
    webApplication: string;
    /**
     * The zone that this app domain applies to"), ValueMap{"Default","Internet","Intranet","Extranet","Custom"}, Values{"Default","Inter
     * net","Intranet","Extranet","Custom
     */
    zone: {};
    /**
     * The port to run apps on
     */
    port: string;
    /**
     * Should apps run under SSL
     */
    sSL: boolean;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(appDomain: string, webApplication: string, zone: {});
}
