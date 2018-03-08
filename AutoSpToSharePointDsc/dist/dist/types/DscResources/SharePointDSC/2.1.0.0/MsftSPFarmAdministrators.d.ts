import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPFarmAdministrators extends DscType {
    /**
     * A generic name for this resource, its value is not important
     */
    name: string;
    /**
     *
     */
    members: string[][];
    /**
     *
     */
    membersToInclude: string[][];
    /**
     *
     */
    membersToExclude: string[][];
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string);
}
