import { DscType } from '../../../Dsc';
export declare class MsftSqlServerConfiguration extends DscType {
    /**
     * The hostname of the SQL Server to be configured.
     */
    serverName: string;
    /**
     * Name of the SQL instance to be configured.
     */
    instanceName: string;
    /**
     * The name of the SQL configuration option to be checked.
     */
    optionName: string;
    /**
     * The desired value of the SQL configuration option.
     */
    optionValue: number;
    /**
     * Determines whether the instance should be restarted after updating the configuration option.
     */
    restartService: boolean;
    /**
     * The length of time, in seconds, to wait for the service to restart. Default is 120 seconds.
     */
    restartTimeout: number;
    constructor(serverName: string, instanceName: string, optionName: string, optionValue: number);
}
