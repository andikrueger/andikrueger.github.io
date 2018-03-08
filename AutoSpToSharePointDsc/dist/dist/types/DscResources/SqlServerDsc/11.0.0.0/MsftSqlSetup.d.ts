import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSqlSetup extends DscType {
    /**
     * The action to be performed. Default value is 'Install'."), ValueMap{"Install","InstallFailoverCluster","AddNode","PrepareFailoverC
     * luster","CompleteFailoverCluster"}, Values{"Install","InstallFailoverCluster","AddNode","PrepareFailoverCluster","CompleteFailover
     * Cluster
     */
    action: {};
    /**
     * The path to the root of the source files for installation. I.e and UNC path to a shared resource. Environment variables can be use
     * d in the path.
     */
    sourcePath: string;
    /**
     * Credentials used to access the path set in the parameter 'SourcePath'.
     */
    sourceCredential: DscCredential;
    /**
     * Suppresses reboot.
     */
    suppressReboot: boolean;
    /**
     * Forces reboot.
     */
    forceReboot: boolean;
    /**
     * SQL features to be installed.
     */
    features: string;
    /**
     * Name of the SQL instance to be installed.
     */
    instanceName: string;
    /**
     * SQL instance ID, if different from InstanceName.
     */
    instanceID: string;
    /**
     * Product key for licensed installations.
     */
    productKey: string;
    /**
     * Enabled updates during installation.
     */
    updateEnabled: string;
    /**
     * Path to the source of updates to be applied during installation.
     */
    updateSource: string;
    /**
     * Enable customer experience reporting.
     */
    sQMReporting: string;
    /**
     * Enable error reporting.
     */
    errorReporting: string;
    /**
     * Installation path for shared SQL files.
     */
    installSharedDir: string;
    /**
     * Installation path for x86 shared SQL files.
     */
    installSharedWOWDir: string;
    /**
     * Installation path for SQL instance files.
     */
    instanceDir: string;
    /**
     * Service account for the SQL service.
     */
    sQLSvcAccount: DscCredential;
    /**
     * Service account for the SQL Agent service.
     */
    agtSvcAccount: DscCredential;
    /**
     * Collation for SQL.
     */
    sQLCollation: string;
    /**
     *
     */
    sQLSysAdminAccounts: string[][];
    /**
     * Security mode to apply to the SQL Server instance.
     */
    securityMode: string;
    /**
     * SA password, if SecurityMode is set to 'SQL'.
     */
    sAPwd: DscCredential;
    /**
     * Root path for SQL database files.
     */
    installSQLDataDir: string;
    /**
     * Path for SQL database files.
     */
    sQLUserDBDir: string;
    /**
     * Path for SQL log files.
     */
    sQLUserDBLogDir: string;
    /**
     * Path for SQL TempDB files.
     */
    sQLTempDBDir: string;
    /**
     * Path for SQL TempDB log files.
     */
    sQLTempDBLogDir: string;
    /**
     * Path for SQL backup files.
     */
    sQLBackupDir: string;
    /**
     * Service account for the Full Text service.
     */
    fTSvcAccount: DscCredential;
    /**
     * Service account for Reporting Services service.
     */
    rSSvcAccount: DscCredential;
    /**
     * Service account for Analysis Services service.
     */
    aSSvcAccount: DscCredential;
    /**
     * Collation for Analysis Services.
     */
    aSCollation: string;
    /**
     *
     */
    aSSysAdminAccounts: string[][];
    /**
     * Path for Analysis Services data files.
     */
    aSDataDir: string;
    /**
     * Path for Analysis Services log files.
     */
    aSLogDir: string;
    /**
     * Path for Analysis Services backup files.
     */
    aSBackupDir: string;
    /**
     * Path for Analysis Services temp files.
     */
    aSTempDir: string;
    /**
     * Path for Analysis Services config.
     */
    aSConfigDir: string;
    /**
     * The server mode for SQL Server Analysis Services instance. The default is to install in Multidimensional mode. Valid values in a c
     * luster scenario are MULTIDIMENSIONAL or TABULAR. Parameter ASServerMode is case-sensitive. All values must be expressed in upper c
     * ase."), ValueMap{"MULTIDIMENSIONAL", "TABULAR", "POWERPIVOT"}, Values{"MULTIDIMENSIONAL", "TABULAR", "POWERPIVOT
     */
    aSServerMode: {};
    /**
     * Service account for Integration Services service.
     */
    iSSvcAccount: DscCredential;
    /**
     * Specifies the startup mode for SQL Server Browser service."), ValueMap{"Automatic", "Disabled", "Manual"}, Values{"Automatic", "Di
     * sabled", "Manual
     */
    browserSvcStartupType: {};
    /**
     * The name of the resource group to create for the clustered SQL Server instance. Default is 'SQL Server (InstanceName)'.
     */
    failoverClusterGroupName: string;
    /**
     *
     */
    failoverClusterIPAddress: string[][];
    /**
     * Host name to be assigned to the clustered SQL Server instance.
     */
    failoverClusterNetworkName: string;
    /**
     * The timeout, in seconds, to wait for the setup process to finish. Default value is 7200 seconds (2 hours). If the setup process do
     * es not finish before this time, and error will be thrown.
     */
    setupProcessTimeout: number;
    constructor(instanceName: string);
}
