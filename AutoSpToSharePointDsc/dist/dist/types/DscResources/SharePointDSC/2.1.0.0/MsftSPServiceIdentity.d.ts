import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPServiceIdentity extends DscType {
    /**
     * The name of the service instance to manage
     */
    name: string;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsAccount if using PowerShell 5"), EmbeddedInstance("MSFT_Cred
     * ential
     */
    installAccount: DscCredential;
    /**
     * The user name of a managed account, LocalService, LocalSystem or NetworkService that will be used to run the service
     */
    managedAccount: string;
    constructor(name: string, managedAccount: string);
}
