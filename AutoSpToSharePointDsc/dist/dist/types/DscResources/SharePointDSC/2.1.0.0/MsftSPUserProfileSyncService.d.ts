import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPUserProfileSyncService extends DscType {
    /**
     * The name of the user profile service for this sync instance
     */
    userProfileServiceAppName: string;
    /**
     * Present to ensure the service is running, absent to ensure it is not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * The farm account, which is needed to provision the service app"), EmbeddedInstance("MSFT_Credential
     */
    farmAccount: DscCredential;
    /**
     * Should the sync service only run when the user profile database is in a writeable state?
     */
    runOnlyWhenWriteable: boolean;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(userProfileServiceAppName: string, farmAccount: DscCredential);
}
