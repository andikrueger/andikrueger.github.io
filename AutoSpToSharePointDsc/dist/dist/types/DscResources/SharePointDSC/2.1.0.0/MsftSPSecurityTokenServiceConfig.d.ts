import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPSecurityTokenServiceConfig extends DscType {
    /**
     * The name of the security token service
     */
    name: string;
    /**
     * The identifier for the security token service
     */
    nameIdentifier: string;
    /**
     * True set the security token service to use cookies
     */
    useSessionCookies: boolean;
    /**
     * True set the security token service to allow OAuth over HTTP
     */
    allowOAuthOverHttp: boolean;
    /**
     * True set the security token service to allow metadata exchange over HTTP
     */
    allowMetadataOverHttp: boolean;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    /**
     * Present ensures the configurations are applied"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    constructor(name: string);
}
