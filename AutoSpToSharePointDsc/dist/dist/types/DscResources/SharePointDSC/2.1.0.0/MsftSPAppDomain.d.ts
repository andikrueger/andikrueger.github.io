import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPAppDomain extends DscType {
    /**
     * The domain name for apps to use in this farm
     */
    appDomain: string;
    /**
     * The prefix to go on to app URLs
     */
    prefix: string;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(appDomain: string, prefix: string);
}
