import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPAlternateUrl extends DscType {
    /**
     * The name of the web application to apply the alternate URL to
     */
    webAppName: string;
    /**
     * The Zone to use for the alternate URL"), ValueMap{"Default","Intranet","Extranet","Custom","Internet"}, Values{"Default","Intranet
     * ","Extranet","Custom","Internet
     */
    zone: {};
    /**
     * The new alternate URL
     */
    url: string;
    /**
     * Specifies if the URL has to be configured as internal
     */
    internal: boolean;
    /**
     * Present ensures the URL is set for this zone on this web app, Absent ensures it is removed"), ValueMap{"Present","Absent"}, Values
     * {"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(webAppName: string, zone: {}, url: string);
}
