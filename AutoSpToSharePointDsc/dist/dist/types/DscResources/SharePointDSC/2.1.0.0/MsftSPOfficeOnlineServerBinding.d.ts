import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPOfficeOnlineServerBinding extends DscType {
    /**
     * The zone for this binding"), ValueMap{"Internal-HTTP","Internal-HTTPS","External-HTTP","External-HTTPS"}, Values{"Internal-HTTP","
     * Internal-HTTPS","External-HTTP","External-HTTPS
     */
    zone: {};
    /**
     * The DNS name of the server/s that are running Office Web Apps
     */
    dnsName: string;
    /**
     * Present ensures the binding for this zone exists, absent ensures it doesn't"), ValueMap{"Present","Absent"}, Values{"Present","Abs
     * ent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(zone: {}, dnsName: string);
}
