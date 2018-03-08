import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPAppCatalog extends DscType {
    /**
     * The URL of the site collection that will be the app catalog for the web app that it is in
     */
    siteUrl: string;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(siteUrl: string);
}
