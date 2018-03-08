import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPFarmPropertyBag extends DscType {
    /**
     * The key of the SPFarm property bag
     */
    key: string;
    /**
     * Value of the SPfarm property bag
     */
    value: string;
    /**
     * Set to present to ensure the SPfarm property exists, or absent to ensure it is removed"), ValueMap{"Present","Absent"}, Values{"Pr
     * esent","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(key: string);
}
