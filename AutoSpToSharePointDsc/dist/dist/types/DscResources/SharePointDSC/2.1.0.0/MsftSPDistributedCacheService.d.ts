import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPDistributedCacheService extends DscType {
    /**
     * A name to assign to this resource - not really used. For example - AppFabricCachingService
     */
    name: string;
    /**
     * How many MB should be used for the cache. The maximum supported is 16384
     */
    cacheSizeInMB: number;
    /**
     * The name of the service account to run the service as. This should already be registered as a managed account in SharePoint
     */
    serviceAccount: string;
    /**
     * Should the Windows Firewall rules for distributed cache be created?
     */
    createFirewallRules: boolean;
    /**
     * Present to ensure the current server should be running distributed cache, absent to ensure that it isn't running"), ValueMap{"Pres
     * ent","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     *
     */
    serverProvisionOrder: string[][];
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string, cacheSizeInMB: number, serviceAccount: string, createFirewallRules: boolean);
}
