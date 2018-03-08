import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPDiagnosticLoggingSettings extends DscType {
    /**
     * The physical path on each server to store ULS logs
     */
    logPath: string;
    /**
     * The space in GB that should be used to store ULS logs
     */
    logSpaceInGB: number;
    /**
     * Should app analytics automatically be uploaded
     */
    appAnalyticsAutomaticUploadEnabled: boolean;
    /**
     * Should the customer experience program be enabled in this farm
     */
    customerExperienceImprovementProgramEnabled: boolean;
    /**
     * How many days should ULS logs be kept for
     */
    daysToKeepLogs: number;
    /**
     * Should updates to error reporting tools be automatically downloaded
     */
    downloadErrorReportingUpdatesEnabled: boolean;
    /**
     * Should error reports be automatically uploaded
     */
    errorReportingAutomaticUploadEnabled: boolean;
    /**
     * Should reporting of errors be enabled
     */
    errorReportingEnabled: boolean;
    /**
     * Protect event logs with Event Log Flood Protection
     */
    eventLogFloodProtectionEnabled: boolean;
    /**
     * What interval should the event logs report a flood event
     */
    eventLogFloodProtectionNotifyInterval: number;
    /**
     * What quiet period should reset the event log flood protection thresholds
     */
    eventLogFloodProtectionQuietPeriod: number;
    /**
     * What is the event log flood protection threshold
     */
    eventLogFloodProtectionThreshold: number;
    /**
     * What is the time period that will trigger event log flood protection
     */
    eventLogFloodProtectionTriggerPeriod: number;
    /**
     * How many minutes of activity will a ULS log file leep in an individual file
     */
    logCutInterval: number;
    /**
     * Will the maximum disk space setting be enabled
     */
    logMaxDiskSpaceUsageEnabled: boolean;
    /**
     * What delay will be set before script error reporting is triggered
     */
    scriptErrorReportingDelay: number;
    /**
     * Is script error reporting enabled in this farm
     */
    scriptErrorReportingEnabled: boolean;
    /**
     * Require users to be authenticated to allow script errors to be reported
     */
    scriptErrorReportingRequireAuth: boolean;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(logPath: string, logSpaceInGB: number);
}
