import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPSearchFileType extends DscType {
    /**
     * The name of the file type
     */
    fileType: string;
    /**
     * The name of the search service application
     */
    serviceAppName: string;
    /**
     * The description of the file type
     */
    description: string;
    /**
     * The mime type of the file type
     */
    mimeType: string;
    /**
     * The state of the file type
     */
    enabled: boolean;
    /**
     * Present if the file type should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(fileType: string, serviceAppName: string);
}
