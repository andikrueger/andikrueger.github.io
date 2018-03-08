import { DscType } from '../../../Dsc';
export declare class MsftSqlAG extends DscType {
    /**
     * The name of the availability group.
     */
    name: string;
    /**
     * Hostname of the SQL Server to be configured.
     */
    serverName: string;
    /**
     * Name of the SQL instance to be configured.
     */
    instanceName: string;
    /**
     * Specifies if the availability group should be present or absent. Default is Present."), ValueMap{"Present","Absent"}, Values{"Pres
     * ent","Absent
     */
    ensure: {};
    /**
     * Specifies the automated backup preference for the availability group. Default is None"), ValueMap{"Primary","SecondaryOnly","Secon
     * dary","None"}, Values{"Primary","SecondaryOnly","Secondary","None
     */
    automatedBackupPreference: {};
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
     * Specifies the type of availability group is Basic. This is only available is SQL Server 2016 and later and is ignored when applied
     *  to previous versions.
     */
    basicAvailabilityGroup: boolean;
    /**
     * Specifies if the option Database Level Health Detection is enabled. This is only available is SQL Server 2016 and later and is ign
     * ored when applied to previous versions.
     */
    databaseHealthTrigger: boolean;
    /**
     * Specifies if the option Database DTC Support is enabled. This is only available is SQL Server 2016 and later and is ignored when a
     * pplied to previous versions. This can't be altered once the Availability Group is created and is ignored if it is the case.
     */
    dtcSupportEnabled: boolean;
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
     * Specifies the hostname or IP address of the availability group replica endpoint. Default is the instance network name.
     */
    endpointHostName: string;
    /**
     * Specifies the automatic failover behavior of the availability group."), ValueMap{"OnServerDown","OnServerUnresponsive","OnCritical
     * ServerErrors","OnModerateServerErrors","OnAnyQualifiedFailureCondition"}, Values{"OnServerDown","OnServerUnresponsive","OnCritical
     * ServerErrors","OnModerateServerErrors","OnAnyQualifiedFailureCondition
     */
    failureConditionLevel: {};
    /**
     * Specifies the failover mode. Default is 'Manual'."), ValueMap{"Automatic","Manual"}, Values{"Automatic","Manual
     */
    failoverMode: {};
    /**
     * Specifies the length of time, in milliseconds, after which AlwaysOn availability groups declare an unresponsive server to be unhea
     * lthy. Default is 30000.
     */
    healthCheckTimeout: number;
    /**
     * Specifies that the resource will only determine if a change is needed if the target node is the active host of the SQL Server Inst
     * ance.
     */
    processOnlyOnActiveNode: boolean;
    constructor(name: string, serverName: string, instanceName: string);
}
