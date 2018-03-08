import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPUserProfileSyncConnection extends DscType {
    /**
     * The name of the connection
     */
    name: string;
    /**
     * The name of the AD forest to read from
     */
    forest: string;
    /**
     * The credentials to connect to Active Directory with"), EmbeddedInstance("MSFT_Credential
     */
    connectionCredentials: DscCredential;
    /**
     * The name of the user profile service that this connection is attached to
     */
    userProfileService: string;
    /**
     *
     */
    includedOUs: string[][];
    /**
     *
     */
    excludedOUs: string[][];
    /**
     * The specific AD server to connect to
     */
    server: string;
    /**
     * Set to true to run the set method on every call to this resource
     */
    force: boolean;
    /**
     * Should SSL be used for the connection
     */
    useSSL: boolean;
    /**
     * The type of the connection - currently only Active Directory is supported"), ValueMap{"ActiveDirectory","BusinessDataCatalog"}, Va
     * lues{"ActiveDirectory","BusinessDataCatalog
     */
    connectionType: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string, forest: string, connectionCredentials: DscCredential, userProfileService: string);
}
