import { DscType } from '../../../Dsc';
export declare class MsftSqlServerEndpointPermission extends DscType {
    /**
     * The name of the SQL instance to be configured.
     */
    instanceName: string;
    /**
     * The host name of the SQL Server to be configured.
     */
    serverName: string;
    /**
     * If the permission should be present or absent. Default value is 'Present'."), ValueMap{"Present","Absent"}, Values{"Present","Abse
     * nt
     */
    ensure: {};
    /**
     * The name of the endpoint.
     */
    name: string;
    /**
     * The login to which permission will be set.
     */
    principal: string;
    /**
     * The permission to set for the login. Valid value for permission are only CONNECT."), ValueMap{"CONNECT"}, Values{"CONNECT
     */
    permission: {};
    constructor(instanceName: string, serverName: string, name: string, principal: string);
}
