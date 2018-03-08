import { DscType } from '../../../Dsc';
export declare class MsftSqlAGDatabase extends DscType {
    /**
     *
     */
    databaseName: string[][];
    /**
     * Hostname of the SQL Server where the primary replica of the availability group lives. If the availability group is not currently o
     * n this server, the resource will attempt to connect to the server where the primary replica lives.
     */
    serverName: string;
    /**
     * Name of the SQL instance to be configured.
     */
    instanceName: string;
    /**
     * The name of the availability group in which to manage the database membership(s).
     */
    availabilityGroupName: string;
    /**
     * The path used to seed the availability group replicas. This should be a path that is accessible by all of the replicas
     */
    backupPath: string;
    /**
     * Specifies the membership of the database(s) in the availability group. The options are: Present: The defined database(s) are added
     *  to the availability group. All other databases that may be a member of the availability group are ignored. Absent: The defined da
     * tabase(s) are removed from the availability group. All other databases that may be a member of the availability group are ignored.
     *  The default is 'Present'."), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * When used with 'Ensure = 'Present'' it ensures the specified database(s) are the only databases that are a member of the specified
     *  Availability Group. This parameter is ignored when 'Ensure' is 'Absent'.
     */
    force: boolean;
    /**
     * If set to $true, this ensures the database owner of the database on the primary replica is the owner of the database on all second
     * ary replicas. This requires the database owner is available as a login on all replicas and that the PSDscRunAsAccount has imperson
     * ate permissions. If set to $false, the owner of the database will be the PSDscRunAsAccount. The default is '$true'
     */
    matchDatabaseOwner: boolean;
    /**
     * Specifies that the resource will only determine if a change is needed if the target node is the active host of the SQL Server Inst
     * ance.
     */
    processOnlyOnActiveNode: boolean;
    constructor(serverName: string, instanceName: string, availabilityGroupName: string, backupPath: string);
}
