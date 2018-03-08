import { DscType } from '../../../Dsc';
export declare class MsftSqlServerPermission extends DscType {
    /**
     * The name of the SQL instance to be configured.
     */
    instanceName: string;
    /**
     * The host name of the SQL Server to be configured. Default value is $env:COMPUTERNAME.
     */
    serverName: string;
    /**
     * If the permission should be present or absent. Default value is 'Present'."), ValueMap{"Present","Absent"}, Values{"Present","Abse
     * nt
     */
    ensure: {};
    /**
     * The login to which permission will be set.
     */
    principal: string;
    /**
     *
     */
    permission: {}[];
    constructor(instanceName: string, principal: string);
}
