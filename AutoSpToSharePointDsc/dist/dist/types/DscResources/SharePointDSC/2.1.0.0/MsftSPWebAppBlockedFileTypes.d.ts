import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPWebAppBlockedFileTypes extends DscType {
    /**
     * The URL of the web application to set blocked file types for
     */
    url: string;
    /**
     *
     */
    blocked: string[][];
    /**
     *
     */
    ensureBlocked: string[][];
    /**
     *
     */
    ensureAllowed: string[][];
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(url: string);
}
