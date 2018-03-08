import { DscType } from '../../../Dsc';
export declare class MsftSqlServerEndpoint extends DscType {
    /**
     * The name of the endpoint.
     */
    endpointName: string;
    /**
     * If the endpoint should be present or absent. Default values is 'Present'."), ValueMap{"Present","Absent"}, Values{"Present","Absen
     * t
     */
    ensure: {};
    /**
     * The network port the endpoint is listening on. Default value is 5022.
     */
    port: number;
    /**
     * The host name of the SQL Server to be configured. Default value is $env:COMPUTERNAME.
     */
    serverName: string;
    /**
     * The name of the SQL instance to be configured.
     */
    instanceName: string;
    /**
     * The network IP address the endpoint is listening on. Default the endpoint will listen on any valid IP address.
     */
    ipAddress: string;
    constructor(endpointName: string, instanceName: string);
}
