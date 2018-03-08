import { DscType } from '../../../Dsc';
export declare class MsftSqlDatabaseDefaultLocation extends DscType {
    /**
     * The host name of the SQL Server to be configured.
     */
    serverName: string;
    /**
     * The name of the SQL instance to be configured.
     */
    instanceName: string;
    /**
     * The type of database default location to be configured. { Data | Log | Backup }"), ValueMap{"Data","Log","Backup"}, Values{"Data",
     * "Log","Backup
     */
    type: {};
    /**
     * The path to the default directory to be configured.
     */
    path: string;
    /**
     * If set to $true then SQL Server and dependent services will be restarted if a change to the default location is made.  The defaul
     * value is $false.
     */
    restartService: boolean;
    /**
     * Specifies that the resource will only determine if a change is needed if the target node is the active host of the SQL Server Inst
     * ance.
     */
    processOnlyOnActiveNode: boolean;
    constructor(serverName: string, instanceName: string, type: {}, path: string);
}
