import { DscType } from '../../../Dsc';
export declare class MsftSqlDatabaseOwner extends DscType {
    /**
     * The name of database to be configured.
     */
    database: string;
    /**
     * The name of the login that will become a owner of the desired sql database.
     */
    name: string;
    /**
     * The host name of the SQL Server to be configured.
     */
    serverName: string;
    /**
     * The name of the SQL instance to be configured.
     */
    instanceName: string;
    constructor(database: string, name: string);
}
