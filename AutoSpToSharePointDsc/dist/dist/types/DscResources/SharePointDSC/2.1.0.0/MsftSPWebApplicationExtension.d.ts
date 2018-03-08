import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPWebApplicationExtension extends DscType {
    /**
     * The URL of the parent web application
     */
    webAppUrl: string;
    /**
     * The name of the web application extension
     */
    name: string;
    /**
     * The URL of the web application extension
     */
    url: string;
    /**
     * Specifies one of the five zones with which the internal URL of this new extension is to be associated."),ValueMap{"Default","Intra
     * net","Internet","Extranet","Custom"}, Values{"Default","Intranet","Internet","Extranet","Custom
     */
    zone: {};
    /**
     * Should anonymous access be enabled for this web app extension
     */
    allowAnonymous: boolean;
    /**
     * The host header to use for the web app extension
     */
    hostHeader: string;
    /**
     * The path on the local servers to host the IIS web site from
     */
    path: string;
    /**
     * The port to run the site on
     */
    port: string;
    /**
     * Should this web app extension use SSL
     */
    useSSL: boolean;
    /**
     * Present if the web app should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(webAppUrl: string, name: string, url: string, zone: {});
}
