import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPProjectServerLicense extends DscType {
    /**
     * Should a Project Server license be enabled or disabled"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * What is the product key for Project Server
     */
    productKey: string;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(ensure: {});
}
