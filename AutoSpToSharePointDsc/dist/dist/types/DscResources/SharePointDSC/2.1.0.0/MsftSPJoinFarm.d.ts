import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPJoinFarm extends DscType {
    /**
     * The name of the config database to connect to
     */
    farmConfigDatabaseName: string;
    /**
     * The server that hosts the config database
     */
    databaseServer: string;
    /**
     * The passphrase that should be used to join the farm") , EmbeddedInstance("MSFT_Credential
     */
    passphrase: DscCredential;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    /**
     * SharePoint 2016 only - the MinRole role to enroll this server as"), ValueMap{"Application","ApplicationWithSearch","Custom","Distr
     * ibutedCache","Search","SingleServer","SingleServerFarm","WebFrontEnd","WebFrontEndWithDistributedCache"}, Values{"Application","Ap
     * plicationWithSearch","Custom","DistributedCache","Search","SingleServer","SingleServerFarm","WebFrontEnd","WebFrontEndWithDistribu
     * tedCache
     */
    serverRole: {};
    constructor(farmConfigDatabaseName: string, databaseServer: string, passphrase: DscCredential);
}
