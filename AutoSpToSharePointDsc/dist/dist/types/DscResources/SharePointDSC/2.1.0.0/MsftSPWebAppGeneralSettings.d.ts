import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPWebAppGeneralSettings extends DscType {
    /**
     * The URL of the web app to set the general settings for
     */
    url: string;
    /**
     * The timezone code to use for this web app. A full list is at https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.
     * spregionalsettings.timezones.aspx
     */
    timeZone: number;
    /**
     * Should alerts be enabled for this web app
     */
    alerts: boolean;
    /**
     * What is the maximum number of alerts that a user can create in this web app
     */
    alertsLimit: number;
    /**
     * Should RSS feeds be enabled in this web app
     */
    rSS: boolean;
    /**
     * Should the Blog API be enabled in this web app
     */
    blogAPI: boolean;
    /**
     * Is authentication required for the blog API
     */
    blogAPIAuthenticated: boolean;
    /**
     * What file handling mode should be used in this web app - strict or permissive"), ValueMap{"Strict","Permissive"}, Values{"Strict",
     * "Permissive
     */
    browserFileHandling: {};
    /**
     * Is security validation enforced in this web app
     */
    securityValidation: boolean;
    /**
     * Does security validation expire after a set time
     */
    securityValidationExpires: boolean;
    /**
     * Number of minutes security validation will expire if securityvalidationexpires is set
     */
    securityValidationTimeoutMinutes: number;
    /**
     * Is the recycle bin enabled in this web application
     */
    recycleBinEnabled: boolean;
    /**
     * Is automatic cleanup of the recycle bin enabled in this web app
     */
    recycleBinCleanupEnabled: boolean;
    /**
     * How many days does the recycle bin keep content for
     */
    recycleBinRetentionPeriod: number;
    /**
     * How much content does the second stage recycle bin keep content for
     */
    secondStageRecycleBinQuota: number;
    /**
     * What is the maximum file upload size for this web app (in MB)
     */
    maximumUploadSize: number;
    /**
     * Should the customer experience program be enabled in this web app
     */
    customerExperienceProgram: boolean;
    /**
     * Is Skype for Business presence enabled for this web app
     */
    presenceEnabled: boolean;
    /**
     * Should the Online WebPart Gallery be enabled for this web app
     */
    allowOnlineWebPartCatalog: boolean;
    /**
     * Should Self Service Site Creation be enabled
     */
    selfServiceSiteCreationEnabled: boolean;
    /**
     * What is the default quota template for this web app
     */
    defaultQuotaTemplate: string;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(url: string);
}
