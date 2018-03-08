import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPWebAppThrottlingSettings extends DscType {
    /**
     * The URL of the web application
     */
    url: string;
    /**
     * What should the list view threshold for this site be set to
     */
    listViewThreshold: number;
    /**
     * Should object model code be able to be override the list view threshold
     */
    allowObjectModelOverride: boolean;
    /**
     * What is the list view threshold for site administrators
     */
    adminThreshold: number;
    /**
     * What is the maximum number of lookup fields in a single list view
     */
    listViewLookupThreshold: number;
    /**
     * Should the happy hour window be enabled for this web app
     */
    happyHourEnabled: boolean;
    /**
     * The time window for happy hour"), EmbeddedInstance("MSFT_SPWebApplicationHappyHour
     */
    happyHour: {};
    /**
     * What is the limit for unique permissions on a single object in this web app
     */
    uniquePermissionThreshold: number;
    /**
     * Is request throttling enabled on this web app
     */
    requestThrottling: boolean;
    /**
     * Is the change log enabled for this web app
     */
    changeLogEnabled: boolean;
    /**
     * How many days does the change log store data for
     */
    changeLogExpiryDays: number;
    /**
     * Are event handlers enabled in the web application
     */
    eventHandlersEnabled: boolean;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(url: string);
}
