import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPWebAppSiteUseAndDeletion extends DscType {
    /**
     * The URL of the web application
     */
    url: string;
    /**
     * Should emails be sent to notify site owners of unused site collections
     */
    sendUnusedSiteCollectionNotifications: boolean;
    /**
     * How many days should pass before a site is flagged as unused
     */
    unusedSiteNotificationPeriod: number;
    /**
     * Should unused site collection be automatically deleted
     */
    automaticallyDeleteUnusedSiteCollections: boolean;
    /**
     * How many days before an unused site is deleted should an email be sent to the owner
     */
    unusedSiteNotificationsBeforeDeletion: number;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(url: string);
}
