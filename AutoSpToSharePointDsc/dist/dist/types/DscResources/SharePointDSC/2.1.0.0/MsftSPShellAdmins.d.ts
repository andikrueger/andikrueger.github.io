import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPShellAdmins extends DscType {
    /**
     * Name of the Database")] String Name;     [Key, Description("Name for the config, used for administration purposes
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
     *
     */
    databases: {}[];
    /**
     * Specify if all databases must get the same config as the general config
     */
    allDatabases: boolean;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string);
}
