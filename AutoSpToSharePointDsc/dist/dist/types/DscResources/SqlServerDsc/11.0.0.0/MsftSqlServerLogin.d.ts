import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSqlServerLogin extends DscType {
    /**
     * The specified login is Present or Absent. Default is Present."), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * The name of the login.
     */
    name: string;
    /**
     *
     */
    loginType: {};
    /**
     * The hostname of the SQL Server to be configured.
     */
    serverName: string;
    /**
     * Name of the SQL instance to be configured.
     */
    instanceName: string;
    /**
     * If LoginType is 'SqlLogin' then a PSCredential is needed for the password to the login.
     */
    loginCredential: DscCredential;
    /**
     * Specifies if the login is required to have its password change on the next login. Only applies to SQL Logins. Default is $true.
     */
    loginMustChangePassword: boolean;
    /**
     * Specifies if the login password is required to expire in accordance to the operating system security policy. Only applies to SQL L
     * ogins. Default is $true.
     */
    loginPasswordExpirationEnabled: boolean;
    /**
     * Specifies if the login password is required to conform to the password policy specified in the system security policy. Only applie
     * s to SQL Logins. Default is $true.
     */
    loginPasswordPolicyEnforced: boolean;
    /**
     * Specifies if the login is disabled. Default is $false.
     */
    disabled: boolean;
    constructor(name: string, serverName: string, instanceName: string);
}
