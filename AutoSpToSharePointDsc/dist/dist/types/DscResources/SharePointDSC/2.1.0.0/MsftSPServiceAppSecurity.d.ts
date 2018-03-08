import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPServiceAppSecurity extends DscType {
    /**
     * The name of the service application you wish to apply security settings to
     */
    serviceAppName: string;
    /**
     * Administrators will set the administrators for the service app, SharingPermissions will set those granted access through the permi
     * ssions button seen in the Sharing section of the ribbon in central admin"), ValueMap{"Administrators","SharingPermissions"}, Value
     * s{"Administrators","SharingPermissions
     */
    securityType: {};
    /**
     *
     */
    members: {}[];
    /**
     *
     */
    membersToInclude: {}[];
    /**
     *
     */
    membersToExclude: string[][];
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(serviceAppName: string, securityType: {});
}
