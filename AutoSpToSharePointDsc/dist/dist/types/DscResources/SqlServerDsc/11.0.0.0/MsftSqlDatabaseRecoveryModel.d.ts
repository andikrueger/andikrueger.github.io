import { DscType } from '../../../Dsc';
export declare class MsftSqlDatabaseRecoveryModel extends DscType {
    /**
     * The recovery model to use for the database."), ValueMap{"Full","Simple","BulkLogged"}, Values{"Full","Simple","BulkLogged
     */
    recoveryModel: {};
    /**
     * The host name of the SQL Server to be configured.
     */
    serverName: string;
    /**
     * The name of the SQL instance to be configured.
     */
    instanceName: string;
    /**
     * The SQL database name
     */
    name: string;
    constructor(recoveryModel: {}, serverName: string, instanceName: string, name: string);
}
