import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPFeature extends DscType {
    /**
     * The name of the feature
     */
    name: string;
    /**
     * The URL to change the feature at
     */
    url: string;
    /**
     * The scope to change the feature at - Farm, WebApplication, SiteCollection or Site"), ValueMap{"Farm","WebApplication","Site","Web"
     * }, Values{"Farm","WebApplication","Site","Web
     */
    featureScope: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    /**
     * Present if the feature is to be enabled, Absent if it is to be disabled"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * The version of the feature to check against
     */
    version: string;
    constructor(name: string, url: string, featureScope: {});
}
