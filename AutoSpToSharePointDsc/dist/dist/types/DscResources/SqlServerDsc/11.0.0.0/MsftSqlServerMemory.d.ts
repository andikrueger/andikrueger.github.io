import { DscType } from '../../../Dsc';
export declare class MsftSqlServerMemory extends DscType {
    /**
     * The name of the SQL instance to be configured.
     */
    instanceName: string;
    /**
     * The host name of the SQL Server to be configured. Default value is $env:COMPUTERNAME.
     */
    serverName: string;
    /**
     * When set to 'Present' then min and max memory will be set to either the value in parameter MinMemory and MaxMemory or dynamically
     * configured when parameter DynamicAlloc is set to $true. When set to 'Absent' min and max memory will be set to default values. Def
     * ault value is Present."), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * If set to $true then max memory will be dynamically configured. When this is set parameter is set to $true, the parameter MaxMemor
     * y must be set to $null or not be configured. Default value is $false.
     */
    dynamicAlloc: boolean;
    /**
     * Minimum amount of memory, in MB, in the buffer pool used by the instance of SQL Server.
     */
    minMemory: number;
    /**
     * Maximum amount of memory, in MB, in the buffer pool used by the instance of SQL Server.
     */
    maxMemory: number;
    /**
     * Specifies that the resource will only determine if a change is needed if the target node is the active host of the SQL Server inst
     * ance.
     */
    processOnlyOnActiveNode: boolean;
    constructor(instanceName: string);
}
