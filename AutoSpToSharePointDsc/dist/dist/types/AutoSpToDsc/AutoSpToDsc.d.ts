export declare class AutoSpToDsc {
    private configXml;
    private config;
    private dscConfigNodes;
    private configurationName;
    private sqlAliasNames;
    constructor(configXml: string);
    /**
     * Adds an install step to the servers mentioned in provision
     * @param installStep DscType - Step to add
     * @param provision string? - Servername
     */
    private addInstallStepByProvisionTo;
    /**
     * Gets the serverNames where a function has to be provisioned
     */
    private getServersToProvisionTo;
    /**
     * Adds an install step to all or a specific server
     * @param installStep  Install step to be added
     * @param serverName (optional) Name of the target server
     */
    private addInstallStepToServer;
    /**
     * Adds an install step to the first server in the collection. This enables all central resources to be
     * provisioned from a single source.
     * @param installStep  Install step to be added
     */
    private addInstallStepToFirstServer;
    /**
     * Extract all Servers from the AutoSPInstaller XML and create new dscNodes
     */
    private getServers;
    private _mapToDsc;
    toString: () => string;
}
