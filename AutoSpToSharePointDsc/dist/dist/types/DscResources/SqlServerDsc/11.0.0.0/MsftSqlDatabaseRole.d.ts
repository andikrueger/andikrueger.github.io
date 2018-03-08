import { DscType } from '../../../Dsc';
export declare class MsftSqlDatabaseRole extends DscType {
    /**
     * If 'Present' (the default value) then the login (user) will be added to the role(s). If 'Absent' then the login (user) will be rem
     * oved from the role(s)."), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * The name of the login that will become a member, or removed as a member, of the role(s).
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
     * The database in which the login (user) and role(s) exist.
     */
    database: string;
    /**
     *
     */
    role: string[][];
    constructor(name: string, serverName: string, instanceName: string, database: string);
}
