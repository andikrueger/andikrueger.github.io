import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPTimerJobState extends DscType {
    /**
     * The type name of the timer job (not the display name)
     */
    typeName: string;
    /**
     * The URL of the web application that the timer job belongs to, N/A if no web application is applicable
     */
    webAppUrl: string;
    /**
     * Should the timer job be enabled or not
     */
    enabled: boolean;
    /**
     * The schedule for the timer job to execute on
     */
    schedule: string;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(typeName: string, webAppUrl: string);
}
