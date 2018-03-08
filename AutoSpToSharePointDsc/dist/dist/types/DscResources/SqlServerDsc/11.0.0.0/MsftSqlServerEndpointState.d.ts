import { DscType } from '../../../Dsc';
export declare class MsftSqlServerEndpointState extends DscType {
    /**
     * The name of the SQL instance to be configured.
     */
    instanceName: string;
    /**
     * The host name of the SQL Server to be configured. Default value is $env:COMPUTERNAME.
     */
    serverName: string;
    /**
     * The name of the endpoint.
     */
    name: string;
    /**
     * The state of the endpoint. Valid states are Started, Stopped or Disabled. Default value is 'Started'."), ValueMap{"Started","Stopp
     * ed","Disabled"}, Values{"Started","Stopped","Disabled
     */
    state: {};
    constructor(instanceName: string, name: string);
}
