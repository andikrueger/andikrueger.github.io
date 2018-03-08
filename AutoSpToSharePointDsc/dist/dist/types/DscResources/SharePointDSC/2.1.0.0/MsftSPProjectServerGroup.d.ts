import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPProjectServerGroup extends DscType {
    /**
     * The default zone URL of the Project site to manage the group at
     */
    url: string;
    /**
     * The name of the group
     */
    name: string;
    /**
     * The description of the group
     */
    description: string;
    /**
     * What AD group should be used to synchronise membership to this Project Server group, cannot be used with Members, MembersToInclude
     *  or MembersToExclude
     */
    aDGroup: string;
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
     * Present if the service app should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(url: string, name: string);
}
