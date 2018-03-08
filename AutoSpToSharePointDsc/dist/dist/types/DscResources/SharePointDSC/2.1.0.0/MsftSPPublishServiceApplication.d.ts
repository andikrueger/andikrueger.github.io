import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPPublishServiceApplication extends DscType {
    /**
     * The name of the service application to publish
     */
    name: string;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    /**
     * Present to ensure it runs on this server, or absent to ensure it is stopped"), ValueMap{"Present","Absent"}, Values{"Present","Abs
     * ent
     */
    ensure: {};
    constructor(name: string);
}
