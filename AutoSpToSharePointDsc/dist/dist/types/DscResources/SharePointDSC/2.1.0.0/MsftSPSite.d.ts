import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPSite extends DscType {
    /**
     * The URL of the site collection
     */
    url: string;
    /**
     * The username of the site collection administrator
     */
    ownerAlias: string;
    /**
     * The compatibility level of the site
     */
    compatibilityLevel: number;
    /**
     * The name of the content database to create the site in
     */
    contentDatabase: string;
    /**
     * The description to apply to the site collection
     */
    description: string;
    /**
     * The URL of the host header web application to create this site in
     */
    hostHeaderWebApplication: string;
    /**
     * The language code of the site
     */
    language: number;
    /**
     * The display name of the site collection
     */
    name: string;
    /**
     * The email address of the site collection administrator
     */
    ownerEmail: string;
    /**
     * The quota template to apply to the site collection
     */
    quotaTemplate: string;
    /**
     * The secondary site collection admin email address
     */
    secondaryEmail: string;
    /**
     * The secondary site collection admin username
     */
    secondaryOwnerAlias: string;
    /**
     * The template to apply to the site collection
     */
    template: string;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(url: string, ownerAlias: string);
}
