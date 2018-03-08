import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPUserProfileSection extends DscType {
    /**
     * The internal name of the user profile section
     */
    name: string;
    /**
     * Present if the section should exist, absent if it should be removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * The name of the user profile service application this section exists in
     */
    userProfileService: string;
    /**
     * The display name of the section
     */
    displayName: string;
    /**
     * A number used to sort sections by
     */
    displayOrder: number;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string, userProfileService: string);
}
