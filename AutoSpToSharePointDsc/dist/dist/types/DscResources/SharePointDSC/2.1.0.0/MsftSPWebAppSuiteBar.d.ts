import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPWebAppSuiteBar extends DscType {
    /**
     * The URL of the web application
     */
    webAppUrl: string;
    /**
     * SP2016+: Url to take the users to when the suite bar logo is clicked
     */
    suiteNavBrandingLogoNavigationUrl: string;
    /**
     * SP2016+: Alternative text for the Suite Bar Logo
     */
    suiteNavBrandingLogoTitle: string;
    /**
     * SP2016+: URL of the logo for the Suite Bar
     */
    suiteNavBrandingLogoUrl: string;
    /**
     * SP2016+: Text to display at the left hand side of the suite bar
     */
    suiteNavBrandingText: string;
    /**
     * SP2013: HTML to inject in the left hand-side of the Suite Bar
     */
    suiteBarBrandingElementHtml: string;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(webAppUrl: string);
}
