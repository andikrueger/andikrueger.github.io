import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSqlServiceAccount extends DscType {
    /**
     * Hostname of the SQL Server.
     */
    serverName: string;
    /**
     * Name of the SQL instance.
     */
    instanceName: string;
    /**
     * Type of service being managed."), ValueMap {"DatabaseEngine","SQLServerAgent","Search","IntegrationServices","AnalysisServices","R
     * eportingServices","SQLServerBrowser","NotificationServices"}, Values {"DatabaseEngine","SQLServerAgent","Search","IntegrationServi
     * ces","AnalysisServices","ReportingServices","SQLServerBrowser","NotificationServices
     */
    serviceType: {};
    /**
     * The service account that should be used when running the service.
     */
    serviceAccount: DscCredential;
    /**
     * Determines whether the service is automatically restarted when a change to the configuration was needed.
     */
    restartService: boolean;
    /**
     * Forces the service account to be updated. Useful for password changes.
     */
    force: boolean;
    constructor(serverName: string, instanceName: string, serviceType: {}, serviceAccount: DscCredential);
}
