import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPProjectServerGlobalPermissions extends DscType {
    /**
     * The default zone URL of the Project site to manage the group at
     */
    url: string;
    /**
     * The name of the user or group
     */
    entityName: string;
    /**
     * What type of entity are you setting permissions for?"), ValueMap{"User","Group"}, Values{"User","Group
     */
    entityType: {};
    /**
     *
     */
    allowPermissions: string[][];
    /**
     *
     */
    denyPermissions: string[][];
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(url: string, entityName: string, entityType: {});
}
