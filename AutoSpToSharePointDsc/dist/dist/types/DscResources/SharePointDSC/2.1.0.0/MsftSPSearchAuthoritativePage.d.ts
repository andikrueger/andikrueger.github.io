import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPSearchAuthoritativePage extends DscType {
    /**
     * Search Service Application Name
     */
    serviceAppName: string;
    /**
     * Source URI for the authoritative page
     */
    path: string;
    /**
     * Level of Authoratitive Page, values between 0.0 and 2.0
     */
    level: {};
    /**
     * The resource will either make the page authoritative or demoted based on this value"), ValueMap{"Authoratative","Demoted"}, Values
     * {"Authoratative","Demoted
     */
    action: {};
    /**
     * Ensure the Authoritative is Present or Absent"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5
     */
    installAccount: DscCredential;
    constructor(serviceAppName: string, path: string);
}
