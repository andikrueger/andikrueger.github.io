import { DscType } from '../../../Dsc';
export declare class MsftSqlDatabase extends DscType {
    /**
     * An enumerated value that describes if the database is added (Present) or dropped (Absent). Valid values are 'Present' or 'Absent'.
     *  Default Value is 'Present'."), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * The name of the SQL database.
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
    /**
     * The name of the SQL collation to use for the new database. Defaults to server collation.
     */
    collation: string;
    constructor(name: string, serverName: string, instanceName: string);
}
