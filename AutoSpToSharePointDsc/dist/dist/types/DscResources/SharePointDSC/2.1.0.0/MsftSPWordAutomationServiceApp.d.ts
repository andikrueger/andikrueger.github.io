import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPWordAutomationServiceApp extends DscType {
    /**
     * THe name of the service application
     */
    name: string;
    /**
     * Present to ensure the app exists, absent to ensure that it does not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * The name of the application pool to run the service app in
     */
    applicationPool: string;
    /**
     * The name of the database for the service app
     */
    databaseName: string;
    /**
     * The name of the server that will host the database
     */
    databaseServer: string;
    /**
     *
     */
    supportedFileFormats: {}[];
    /**
     * Should embedded fonts be disabled
     */
    disableEmbeddedFonts: boolean;
    /**
     * What is the maximum amount of memory the service app should use (in MB)
     */
    maximumMemoryUsage: number;
    /**
     * What is the recycle threshold for this service app
     */
    recycleThreshold: number;
    /**
     * Should binary file scans be disabled
     */
    disableBinaryFileScan: boolean;
    /**
     * How many conversion processes can be run at once
     */
    conversionProcesses: number;
    /**
     * How frequently should new jobs be started from the queue (in minutes)
     */
    jobConversionFrequency: number;
    /**
     * How many document conversions should be included in a single process
     */
    numberOfConversionsPerProcess: number;
    /**
     * How long can a conversion be run before it becomes monitored
     */
    timeBeforeConversionIsMonitored: number;
    /**
     * What is the maximum number of attempts to convert a document
     */
    maximumConversionAttempts: number;
    /**
     * What is the maximum number of sync conversion requests for the service app
     */
    maximumSyncConversionRequests: number;
    /**
     * How long is the keep alive timeout set to for the service app
     */
    keepAliveTimeout: number;
    /**
     * What is the maximum time in seconds for a document conversion to be allowed to run
     */
    maximumConversionTime: number;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string);
}
