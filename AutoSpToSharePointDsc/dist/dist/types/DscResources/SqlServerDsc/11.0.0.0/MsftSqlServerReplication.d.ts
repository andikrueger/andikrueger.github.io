import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSqlServerReplication extends DscType {
    /**
     * SQL Server instance name where replication distribution will be configured
     */
    instanceName: string;
    /**
     *
     */
    ensure: {};
    /**
     *
     */
    distributorMode: {};
    /**
     * Distributor administration link password
     */
    adminLinkCredentials: DscCredential;
    /**
     * Distribution database name
     */
    distributionDBName: string;
    /**
     * Distributor server name if configuring publisher with remote distributor
     */
    remoteDistributor: string;
    /**
     * Publisher working directory
     */
    workingDirectory: string;
    /**
     * Publisher security mode
     */
    useTrustedConnection: boolean;
    /**
     * Force flag for uninstall procedure
     */
    uninstallWithForce: boolean;
    constructor(instanceName: string, distributorMode: {}, adminLinkCredentials: DscCredential, workingDirectory: string);
}
