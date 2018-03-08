import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPOutgoingEmailSettings extends DscType {
    /**
     * The URL of the web application. If you want to set the global settings use the Central Admin URL
     */
    webAppUrl: string;
    /**
     * The SMTP server for outgoing mail
     */
    sMTPServer: string;
    /**
     * The from address to put on messages
     */
    fromAddress: string;
    /**
     * The email address that replies should be directed to
     */
    replyToAddress: string;
    /**
     * The character set to use on messages
     */
    characterSet: string;
    /**
     * Use TLS when connecting to the SMTP server (SharePoint 2016 only)
     */
    useTLS: boolean;
    /**
     * The port which is used to connect to the SMTP server (SharePoint 2016 only)
     */
    sMTPPort: number;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(webAppUrl: string, sMTPServer: string, fromAddress: string, replyToAddress: string, characterSet: string);
}
