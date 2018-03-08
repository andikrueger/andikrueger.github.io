import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPUserProfileServiceAppPermissions extends DscType {
    /**
     * The name of the proxy that is attached to the user profile service you wish to set permissions for
     */
    proxyName: string;
    /**
     *
     */
    createPersonalSite: string[][];
    /**
     *
     */
    followAndEditProfile: string[][];
    /**
     *
     */
    useTagsAndNotes: string[][];
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(proxyName: string);
}
