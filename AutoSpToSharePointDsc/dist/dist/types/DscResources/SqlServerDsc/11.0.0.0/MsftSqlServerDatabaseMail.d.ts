import { DscType } from '../../../Dsc';
export declare class MsftSqlServerDatabaseMail extends DscType {
    /**
     * Specifies the desired state of the Database Mail. When set to 'Present', the Database Mail will be created. When set to 'Absent',
     * the Database Mail will be removed. Default value is 'Present'."), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * The hostname of the SQL Server to be configured. Defaults to $env:COMPUTERNAME.
     */
    serverName: string;
    /**
     * The name of the SQL instance to be configured.
     */
    instanceName: string;
    /**
     * The name of the Database Mail account.
     */
    accountName: string;
    /**
     * The e-mail address from which mail will originate.
     */
    emailAddress: string;
    /**
     * The fully qualified domain name of the mail server name to which e-mail are sent.
     */
    mailServerName: string;
    /**
     * The profile name of the Database Mail.
     */
    profileName: string;
    /**
     * The display name of the outgoing mail server. Default value is the same value assigned to parameter MailServerName.
     */
    displayName: string;
    /**
     * The e-mail address to which the receiver of e-mails will reply to. Default value is the same e-mail address assigned to parameter
     * EmailAddress.
     */
    replyToAddress: string;
    /**
     * The description of the Database Mail.
     */
    description: string;
    /**
     * The logging level that the Database Mail will use. If not specified the default logging level is 'Extended'."), ValueMap{"Normal",
     * "Extended","Verbose"}, Values{"Normal","Extended","Verbose
     */
    loggingLevel: {};
    /**
     * The TCP port used for communication. Default value is port 25.
     */
    tcpPort: number;
    constructor(instanceName: string, accountName: string, emailAddress: string, mailServerName: string, profileName: string);
}
