import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPInfoPathFormsServiceConfig extends DscType {
    /**
     * Present ensures the settings are applied"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * True sets the InfoPath Forms Service to allow users to browse forms
     */
    allowUserFormBrowserEnabling: boolean;
    /**
     * True sets the InfoPath Forms Service to render forms in the browser
     */
    allowUserFormBrowserRendering: boolean;
    /**
     * Sets the maximum connection timeout in milliseconds
     */
    maxDataConnectionTimeout: number;
    /**
     * Sets the default connection timeout in milliseconds
     */
    defaultDataConnectionTimeout: number;
    /**
     * Sets the maximum response size in kb for the user response
     */
    maxDataConnectionResponseSize: number;
    /**
     * True sets the InfoPath Forms Service to require SSL for its connections
     */
    requireSslForDataConnections: boolean;
    /**
     * True sets the InfoPath Forms Service to allow embedded SQL sonnections in Forms
     */
    allowEmbeddedSqlForDataConnections: boolean;
    /**
     * True sets the InfoPath Forms Service to allow User Defined connections
     */
    allowUdcAuthenticationForDataConnections: boolean;
    /**
     * True sets the InfoPath Forms Service to allow Cross-Domain connections
     */
    allowUserFormCrossDomainDataConnections: boolean;
    /**
     * Maximum number of postback allowed per session
     */
    maxPostbacksPerSession: number;
    /**
     * Maximum number of actions that can be triggered per postback
     */
    maxUserActionsPerPostback: number;
    /**
     * Timeout in minutes for active sessions
     */
    activeSessionsTimeout: number;
    /**
     * Maximum size of user session data
     */
    maxSizeOfUserFormState: number;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(ensure: {});
}
