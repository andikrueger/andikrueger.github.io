import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPFarm extends DscType {
    /**
     * Present to create/join the farm. Absent is currently not supported"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * Name of the configuration database
     */
    farmConfigDatabaseName: string;
    /**
     * Server that will host the configuration and admin content databases
     */
    databaseServer: string;
    /**
     * The account to use as the main farm account"), EmbeddedInstance("MSFT_Credential
     */
    farmAccount: DscCredential;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    /**
     * The passphrase to use to allow servers to join this farm"), EmbeddedInstance("MSFT_Credential
     */
    passphrase: DscCredential;
    /**
     * The name of the admin content database
     */
    adminContentDatabaseName: string;
    /**
     * Should the central admin site run on this specific server?
     */
    runCentralAdmin: boolean;
    /**
     * What port will Central Admin be provisioned to - default is 9999
     */
    centralAdministrationPort: number;
    /**
     * The authentication provider of the CentralAdministration web application"), ValueMap{"NTLM","Kerberos"}, Values{"NTLM","Kerberos
     */
    centralAdministrationAuth: {};
    /**
     * SharePoint 2016 only - the MinRole role to enroll this server as"), ValueMap{"Application","ApplicationWithSearch","Custom","Distr
     * ibutedCache","Search","SingleServer","SingleServerFarm","WebFrontEnd","WebFrontEndWithDistributedCache"}, Values{"Application","Ap
     * plicationWithSearch","Custom","DistributedCache","Search","SingleServer","SingleServerFarm","WebFrontEnd","WebFrontEndWithDistribu
     * tedCache
     */
    serverRole: {};
    constructor(ensure: {}, farmConfigDatabaseName: string, databaseServer: string, farmAccount: DscCredential, passphrase: DscCredential, adminContentDatabaseName: string, runCentralAdmin: boolean);
}
