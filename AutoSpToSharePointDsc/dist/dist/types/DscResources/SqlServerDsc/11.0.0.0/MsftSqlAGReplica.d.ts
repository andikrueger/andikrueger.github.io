import { DscType } from '../../../Dsc';
export declare class MsftSqlAGReplica extends DscType {
    /**
     * The name of the availability group replica. For named instances this must be in the following format ServerName\\InstanceName.
     */
    name: string;
    /**
     * The name of the availability group.
     */
    availabilityGroupName: string;
    /**
     * Hostname of the SQL Server to be configured.
     */
    serverName: string;
    /**
     * Name of the SQL instance to be configured.
     */
    instanceName: string;
    /**
     * Hostname of the SQL Server where the primary replica is expected to be active. If the primary replica is not found here, the resou
     * rce will attempt to find the host that holds the primary replica and connect to it.
     */
    primaryReplicaServerName: string;
    /**
     * Name of the SQL instance where the primary replica lives.
     */
    primaryReplicaInstanceName: string;
    /**
     * Specifies if the availability group replica should be present or absent. Default is Present."), ValueMap{"Present","Absent"}, Valu
     * es{"Present","Absent
     */
    ensure: {};
    /**
     * Specifies the replica availability mode. Default is 'AsynchronousCommit'."), ValueMap{"AsynchronousCommit","SynchronousCommit"}, V
     * alues{"AsynchronousCommit","SynchronousCommit
     */
    availabilityMode: {};
    /**
     * Specifies the desired priority of the replicas in performing backups. The acceptable values for this parameter are: integers from
     * 0 through 100. Of the set of replicas which are online and available, the replica that has the highest priority performs the backu
     * p. Default is 50.
     */
    backupPriority: number;
    /**
     * Specifies how the availability replica handles connections when in the primary role."), ValueMap{"AllowAllConnections","AllowReadW
     * riteConnections"}, Values{"AllowAllConnections","AllowReadWriteConnections
     */
    connectionModeInPrimaryRole: {};
    /**
     * Specifies how the availability replica handles connections when in the secondary role."), ValueMap{"AllowNoConnections","AllowRead
     * IntentConnectionsOnly","AllowAllConnections"}, Values{"AllowNoConnections","AllowReadIntentConnectionsOnly","AllowAllConnections
     */
    connectionModeInSecondaryRole: {};
    /**
     * Specifies the hostname or IP address of the availability group replica endpoint. Default is the instance network name which is set
     *  in the code because the value can only be determined when connected to the SQL Instance.
     */
    endpointHostName: string;
    /**
     * Specifies the failover mode. Default is 'Manual'."), ValueMap{"Automatic","Manual"}, Values{"Automatic","Manual
     */
    failoverMode: {};
    /**
     * Specifies the fully-qualified domain name (FQDN) and port to use when routing to the replica for read only connections.
     */
    readOnlyRoutingConnectionUrl: string;
    /**
     *
     */
    readOnlyRoutingList: string[][];
    /**
     * Specifies that the resource will only determine if a change is needed if the target node is the active host of the SQL Server inst
     * ance.
     */
    processOnlyOnActiveNode: boolean;
    constructor(name: string, availabilityGroupName: string, serverName: string, instanceName: string);
}
