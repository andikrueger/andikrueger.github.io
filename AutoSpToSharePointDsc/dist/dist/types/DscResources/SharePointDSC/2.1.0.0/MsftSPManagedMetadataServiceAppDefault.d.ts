import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPManagedMetadataServiceAppDefault extends DscType {
    /**
     * Specifies the resource is a single instance, the value must be 'Yes'"), ValueMap{"Yes"}, Values{"Yes
     */
    isSingleInstance: {};
    /**
     * The name of the managed metadata service application proxy used as default column terms set
     */
    defaultSiteCollectionProxyName: string;
    /**
     * The name of the managed metadata service application proxy used as default keyword terms set
     */
    defaultKeywordProxyName: string;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(isSingleInstance: {}, defaultSiteCollectionProxyName: string, defaultKeywordProxyName: string);
}
