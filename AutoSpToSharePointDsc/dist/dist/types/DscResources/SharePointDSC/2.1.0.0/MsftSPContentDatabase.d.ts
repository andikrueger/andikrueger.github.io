import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPContentDatabase extends DscType {
    /**
     * Specifies the name of the content database
     */
    name: string;
    /**
     * The name of the database server to host the content DB
     */
    databaseServer: string;
    /**
     * The URL of the web application
     */
    webAppUrl: string;
    /**
     * Should the database be enabled
     */
    enabled: boolean;
    /**
     * Specify the site collection warning limit for the content database
     */
    warningSiteCount: number;
    /**
     * Specify the site collection maximum limit for the content database
     */
    maximumSiteCount: number;
    /**
     * Present to create this database, absent to ensure it does not exist"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string, webAppUrl: string);
}
