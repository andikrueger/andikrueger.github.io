import { DscType } from '../../../Dsc';
export declare class MsftSqlDatabasePermission extends DscType {
    /**
     * If the values should be present or absent. Valid values are 'Present' or 'Absent'."), ValueMap{"Present","Absent"}, Values{"Presen
     * t","Absent
     */
    ensure: {};
    /**
     * The name of the database.
     */
    database: string;
    /**
     * The name of the user that should be granted or denied the permission.
     */
    name: string;
    /**
     * The state of the permission. Valid values are 'Grant' or 'Deny'."), ValueMap{"Grant","Deny","GrantWithGrant"}, Values{"Grant","Den
     * y","GrantWithGrant
     */
    permissionState: {};
    /**
     *
     */
    permissions: string[][];
    /**
     * The host name of the SQL Server to be configured.
     */
    serverName: string;
    /**
     * The name of the SQL instance to be configured.
     */
    instanceName: string;
    constructor(database: string, name: string, permissionState: {}, serverName: string, instanceName: string);
}
