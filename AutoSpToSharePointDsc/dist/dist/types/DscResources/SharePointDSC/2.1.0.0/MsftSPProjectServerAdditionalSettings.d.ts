import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPProjectServerAdditionalSettings extends DscType {
    /**
     * The default zone URL of the Project site to manage settings at
     */
    url: string;
    /**
     * What is the minimum build number for the Project Professional client that can connect?
     */
    projectProfessionalMinBuildNumber: string;
    /**
     * What is the default server currency?
     */
    serverCurrency: string;
    /**
     * Should all projects be forced to use the server currency?
     */
    enforceServerCurrency: boolean;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(url: string);
}
