import { DscType } from '../../../Dsc';
export declare class MsftSqlRS extends DscType {
    /**
     * Name of the SQL Server Reporting Services instance to be configured.
     */
    instanceName: string;
    /**
     * Name of the SQL Server to host the Reporting Service database.
     */
    databaseServerName: string;
    /**
     * Name of the SQL Server instance to host the Reporting Service database.
     */
    databaseInstanceName: string;
    /**
     * Report Server Web Service virtual directory. Optional.
     */
    reportServerVirtualDirectory: string;
    /**
     * Report Manager/Report Web App virtual directory name. Optional.
     */
    reportsVirtualDirectory: string;
    /**
     *
     */
    reportServerReservedUrl: string[][];
    /**
     *
     */
    reportsReservedUrl: string[][];
    /**
     * If connections to the Reporting Services must use SSL. If this parameter is not assigned a value, the default is that Reporting Se
     * rvices does not use SSL.
     */
    useSsl: boolean;
    constructor(instanceName: string, databaseServerName: string, databaseInstanceName: string);
}
