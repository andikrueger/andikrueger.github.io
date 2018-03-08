import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPServiceAppProxyGroup extends DscType {
    /**
     * Name of the Proxy Group to create
     */
    name: string;
    /**
     * Present creates the proxy group if it does not already exist, Absent will delete the proxy group if it exists"), ValueMap{"Present
     * ","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     *
     */
    serviceAppProxies: string[][];
    /**
     *
     */
    serviceAppProxiesToInclude: string[][];
    /**
     *
     */
    serviceAppProxiesToExclude: string[][];
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string);
}
