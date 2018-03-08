import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPPasswordChangeSettings extends DscType {
    /**
     * The email address to send notifications of password changes to
     */
    mailAddress: string;
    /**
     * The number of days before password expiry to send send emails
     */
    daysBeforeExpiry: number;
    /**
     * The duration that a password reset will wait for before it times out
     */
    passwordChangeWaitTimeSeconds: number;
    /**
     * How many retries if the password change fails
     */
    numberOfRetries: number;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(mailAddress: string);
}
