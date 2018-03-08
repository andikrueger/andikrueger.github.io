import { DscType } from '../../../Dsc';
export declare class MsftSqlServerRole extends DscType {
    /**
     * An enumerated value that describes if the server role is added (Present) or dropped (Absent). Default value is 'Present'."), Value
     * Map{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     *
     */
    members: string[][];
    /**
     *
     */
    membersToInclude: string[][];
    /**
     *
     */
    membersToExclude: string[][];
    /**
     * The name of of SQL role to add or remove.
     */
    serverRoleName: string;
    /**
     * The host name of the SQL Server to be configured.
     */
    serverName: string;
    /**
     * The name of the SQL instance to be configured.
     */
    instanceName: string;
    constructor(serverRoleName: string, serverName: string, instanceName: string);
}
