import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPWeb extends DscType {
    /**
     * The URL of the web
     */
    url: string;
    /**
     * Present if the web should exist or Absent if it should be removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * The description to apply to the web
     */
    description: string;
    /**
     * The Name of the web
     */
    name: string;
    /**
     * The Lanhuage (LCID) of the web
     */
    language: number;
    /**
     * The WebTemplate to use to create the web
     */
    template: string;
    /**
     * True if the web should have unique permissions, otherwise false.
     */
    uniquePermissions: boolean;
    /**
     * True if the web should use the parent nav bar, otherwise false.
     */
    useParentTopNav: boolean;
    /**
     * True if the web should be in the quick launch of the parent web, otherwise false.
     */
    addToQuickLaunch: boolean;
    /**
     * True if the web should be added to the top nav bar of the parent web, otherwise false.
     */
    addToTopNav: boolean;
    /**
     * The e-mail address to which requests for access are sent. Set to emtpy string to disable access requests.
     */
    requestAccessEmail: string;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(url: string);
}
