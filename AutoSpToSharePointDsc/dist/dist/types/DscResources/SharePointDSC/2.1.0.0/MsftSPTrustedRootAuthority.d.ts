import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPTrustedRootAuthority extends DscType {
    /**
     * Specifies the name of the trusted root authority to create.
     */
    name: string;
    /**
     * Specifies the X.509 certificate of the trusted root authority, as a certificate thumbprint.
     */
    certificateThumbprint: string;
    /**
     * Present ensures service app exists, absent ensures it is removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5
     */
    installAccount: DscCredential;
    constructor(name: string, certificateThumbprint: string);
}
