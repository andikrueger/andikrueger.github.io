import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPProjectServerTimeSheetSettings extends DscType {
    /**
     * The default zone URL of the Project site to set timesheet settings for
     */
    url: string;
    /**
     * Should timesheets allow tracking of overtime and non-billable work types
     */
    enableOvertimeAndNonBillableTracking: boolean;
    /**
     * What is the default mode for timesheets to be created in"), ValueMap{"CurrentTaskAssignments","CurrentProjects","NoPrepopulation"}
     * , Values{"CurrentTaskAssignments","CurrentProjects","NoPrepopulation
     */
    defaultTimesheetCreationMode: {};
    /**
     * What is the default tracking unit for timesheets"), ValueMap{"Days","Weeks"}, Values{"Days","Weeks
     */
    defaultTrackingUnit: {};
    /**
     * What is the default reporting unit for timesheets"), ValueMap{"Hours","Days"}, Values{"Hours","Days
     */
    defaultReportingUnit: {};
    /**
     * How many hours are in a standard timesheeet day?
     */
    hoursInStandardDay: {};
    /**
     * How many hours are in a standard timesheeet week?
     */
    hoursInStandardWeek: {};
    /**
     * Maximum hours per timesheet
     */
    maxHoursPerTimesheet: {};
    /**
     * Minimum hours per timesheet
     */
    minHoursPerTimesheet: {};
    /**
     * Maximum hours per day
     */
    maxHoursPerDay: {};
    /**
     * Allow future time reporting?
     */
    allowFutureTimeReporting: boolean;
    /**
     * Allow new personal tasks?
     */
    allowNewPersonalTasks: boolean;
    /**
     * Allow top-level time reporting?
     */
    allowTopLevelTimeReporting: boolean;
    /**
     * Require task status manager approval?
     */
    requireTaskStatusManagerApproval: boolean;
    /**
     * Require line approval before timesheet approval?
     */
    requireLineApprovalBeforeTimesheetApproval: boolean;
    /**
     * Enable timesheet auditing?
     */
    enableTimesheetAuditing: boolean;
    /**
     * Enable fixed approval routing?
     */
    fixedApprovalRouting: boolean;
    /**
     * Enable single entry mode?
     */
    singleEntryMode: boolean;
    /**
     * What is the default tracking mode for tasks?"), ValueMap{"PercentComplete","ActualDoneAndRemaining","HoursPerPeriod","FreeForm"},
     * Values{"PercentComplete","ActualDoneAndRemaining","HoursPerPeriod","FreeForm
     */
    defaultTrackingMode: {};
    /**
     * Force project managers to use the specified tracking mode for each project?
     */
    forceTrackingModeForAllProjects: boolean;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(url: string);
}
