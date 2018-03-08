import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPFarmSolution extends DscType {
    /**
     * The filename of the WSP package
     */
    name: string;
    /**
     * The full path to the WSP file
     */
    literalPath: string;
    /**
     *
     */
    webApplications: string[][];
    /**
     * Present if the WSP should be deployed, or Absent if it should be removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     *
     */
    ensure: {};
    /**
     * The version of the package that is being modified
     */
    version: string;
    /**
     * Should the solution be deployed to the farm, or just installed to the farm
     */
    deployed: boolean;
    /**
     * What compatability level should the WSP be deployed as?"), ValueMap{"14","15","All"}, Values{"14","15","All
     */
    solutionLevel: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string, literalPath: string);
}
