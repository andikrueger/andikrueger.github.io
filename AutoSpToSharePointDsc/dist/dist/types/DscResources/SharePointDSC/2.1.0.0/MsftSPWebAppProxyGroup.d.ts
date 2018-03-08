import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPWebAppProxyGroup extends DscType {
    /**
     * URL of the web application
     */
    webAppUrl: string;
    /**
     * Name of the Service Application Proxy Group
     */
    serviceAppProxyGroup: string;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(webAppUrl: string, serviceAppProxyGroup: string);
}
