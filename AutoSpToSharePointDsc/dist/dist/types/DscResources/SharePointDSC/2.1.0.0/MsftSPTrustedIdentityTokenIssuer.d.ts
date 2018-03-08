import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPTrustedIdentityTokenIssuer extends DscType {
    /**
     * Display name of the incoming claim type")] String Name;     [Key, Description("Name of the SPTrustedIdentityTokenIssuer
     */
    name: string;
    /**
     * Description of the SPTrustedIdentityTokenIssuer
     */
    description: string;
    /**
     * Default Realm that is passed to identity provider
     */
    realm: string;
    /**
     * URL of the identity provider where user is redirected to for authentication
     */
    signInUrl: string;
    /**
     * Identity claim type that uniquely identifies the user
     */
    identifierClaim: string;
    /**
     *
     */
    claimsMappings: {}[];
    /**
     * Specify the thumbprint of the signing certificate, which must be located in certificate store LocalMachine\\My
     */
    signingCertificateThumbprint: string;
    /**
     * Specify the file path to the signing certificate if it is not stored in the local certificate store already
     */
    signingCertificateFilePath: string;
    /**
     * Present if the SPTrustedIdentityTokenIssuer should be created, or Absent if it should be removed"), ValueMap{"Present","Absent"},
     * Values{"Present","Absent
     */
    ensure: {};
    /**
     * Name of a claims provider to set with this SPTrustedIdentityTokenIssuer
     */
    claimProviderName: string;
    /**
     * Sign-out URL
     */
    providerSignOutUri: string;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string, description: string, realm: string, signInUrl: string, identifierClaim: string);
}
