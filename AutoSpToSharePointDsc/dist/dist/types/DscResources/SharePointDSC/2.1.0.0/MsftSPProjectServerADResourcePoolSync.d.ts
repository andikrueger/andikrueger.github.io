import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPProjectServerADResourcePoolSync extends DscType {
    /**
     * The default zone URL of the Project site to set permissions for
     */
    url: string;
    /**
     *
     */
    groupNames: string[][];
    /**
     * Should the resource sync process be present or absent for this site?"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * Should inactive users found in sync be automatically reactiviated?
     */
    autoReactivateUsers: boolean;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(url: string);
}
