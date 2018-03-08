import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPProjectServerServiceApp extends DscType {
    /**
     * The name of the service application
     */
    name: string;
    /**
     * The name of the application pool to run the service app in
     */
    applicationPool: string;
    /**
     * The name of the Project Server Service Application Proxy
     */
    proxyName: string;
    /**
     * Present if the service app should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string, applicationPool: string);
}
