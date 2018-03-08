import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPCacheAccounts extends DscType {
    /**
     * The URL of the web application to set the accounts for
     */
    webAppUrl: string;
    /**
     * The account name for the super user
     */
    superUserAlias: string;
    /**
     * The account name for the super reader
     */
    superReaderAlias: string;
    /**
     * Should the web app policy be set for these accounts?
     */
    setWebAppPolicy: boolean;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(webAppUrl: string, superUserAlias: string, superReaderAlias: string);
}
