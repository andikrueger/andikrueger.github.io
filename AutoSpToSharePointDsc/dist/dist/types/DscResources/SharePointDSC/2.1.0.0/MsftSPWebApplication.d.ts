import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPWebApplication extends DscType {
    /**
     * The name of the web application
     */
    name: string;
    /**
     * The name of the application pool to run this site in
     */
    applicationPool: string;
    /**
     * The name of the managed account to run the app pool with
     */
    applicationPoolAccount: string;
    /**
     * The URL of the web application
     */
    url: string;
    /**
     * Should anonymous access be enabled for this web app
     */
    allowAnonymous: boolean;
    /**
     * The name of the first content database to be created with this web app
     */
    databaseName: string;
    /**
     * The name of the database server to host the default content DB
     */
    databaseServer: string;
    /**
     * The host header to use for the web app
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
     * Create the web application with Classic authentication (only used during creation of a new web application)
     */
    useClassic: boolean;
    /**
     * Present if the web app should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string, applicationPool: string, applicationPoolAccount: string, url: string);
}
