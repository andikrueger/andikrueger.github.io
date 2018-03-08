import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPManagedAccount extends DscType {
    /**
     * The credential with password of the account"), EmbeddedInstance("MSFT_Credential
     */
    account: DscCredential;
    /**
     * Present ensures managed account exists, absent ensures it is removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    /**
     * How many days before a password change should an email be sent
     */
    emailNotification: number;
    /**
     * How many days before a password expires should it be changed
     */
    preExpireDays: number;
    /**
     * What is the schedule for the password reset
     */
    schedule: string;
    /**
     * The username of the account
     */
    accountName: string;
    constructor(accountName: string);
}
