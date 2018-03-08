import { DscType } from '../../../Dsc';
export declare class MsftSqlAlwaysOnService extends DscType {
    /**
     * An enumerated value that describes if the SQL Server should have Always On high availability and disaster recovery (HADR) property
     *  enabled ('Present') or disabled ('Absent')."), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * The hostname of the SQL Server to be configured.
     */
    serverName: string;
    /**
     * The name of the SQL instance to be configured.
     */
    instanceName: string;
    /**
     * The length of time, in seconds, to wait for the service to restart. Default is 120 seconds.
     */
    restartTimeout: number;
    constructor(ensure: {}, serverName: string, instanceName: string);
}
