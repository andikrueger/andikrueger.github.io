import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPManagedPath extends DscType {
    /**
     * The URL of the web application to apply the managed path to - this is ignored for host header web applications
     */
    webAppUrl: string;
    /**
     * The relative URL of the managed path
     */
    relativeUrl: string;
    /**
     * Should the host header be explicit? If false then it is a wildcard
     */
    explicit: boolean;
    /**
     * Is this a host header web application?
     */
    hostHeader: boolean;
    /**
     * Present ensures managed path exists, absent ensures it is removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(webAppUrl: string, relativeUrl: string, explicit: boolean, hostHeader: boolean);
}
