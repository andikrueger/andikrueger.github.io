import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPRemoteFarmTrust extends DscType {
    /**
     * A name of the remote farm, used to create token issuer and root authority
     */
    name: string;
    /**
     * The URL of a web app in the remote farm, must use HTTPS
     */
    remoteWebAppUrl: string;
    /**
     * The URL of a local web app to connect the remote farm to
     */
    localWebAppUrl: string;
    /**
     * Set to present to ensure the trust exists, or absent to ensure it is removed"), ValueMap{"Present","Absent"}, Values{"Present","Ab
     * sent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string, remoteWebAppUrl: string, localWebAppUrl: string);
}
