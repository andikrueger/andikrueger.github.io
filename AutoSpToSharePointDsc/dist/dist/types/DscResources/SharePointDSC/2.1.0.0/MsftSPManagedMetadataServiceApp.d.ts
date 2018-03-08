import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPManagedMetadataServiceApp extends DscType {
    /**
     * The name of the managed metadata service application
     */
    name: string;
    /**
     * The proxy name, if not specified will be /Name of service app/ Proxy
     */
    proxyName: string;
    /**
     * The application pool that the service app will use
     */
    applicationPool: string;
    /**
     * The name of the database server which will host the application
     */
    databaseServer: string;
    /**
     * The name of the database for the service application
     */
    databaseName: string;
    /**
     *
     */
    termStoreAdministrators: string[][];
    /**
     * Present ensures service app exists, absent ensures it is removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * The URL of the content type hub for this app (only set when the app is provisioned)
     */
    contentTypeHubUrl: string;
    /**
     * The LCID of the default language (only set when the app is provisioned)
     */
    defaultLanguage: number;
    /**
     *
     */
    languages: number[][];
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string, applicationPool: string);
}
