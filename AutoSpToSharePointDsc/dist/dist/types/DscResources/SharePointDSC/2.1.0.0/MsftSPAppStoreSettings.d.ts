import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPAppStoreSettings extends DscType {
    /**
     * The URL of the web application
     */
    webAppUrl: string;
    /**
     * Specifies if App Purchases from the SharePoint Store are allowed
     */
    allowAppPurchases: boolean;
    /**
     * Specifies if App Purchases for Office applications are allowed
     */
    allowAppsForOffice: boolean;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(webAppUrl: string);
}
