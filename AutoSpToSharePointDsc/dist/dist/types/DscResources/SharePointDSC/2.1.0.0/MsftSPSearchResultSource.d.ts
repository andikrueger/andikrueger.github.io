import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPSearchResultSource extends DscType {
    /**
     * The name of the result source
     */
    name: string;
    /**
     * The name of the search service application to associate this result source with
     */
    searchServiceAppName: string;
    /**
     * The query to pass to the provider source
     */
    query: string;
    /**
     * The provider type to use for the result source"), ValueMap{"Exchange Search Provider","Local People Provider","Local SharePoint Pr
     * ovider","OpenSearch Provider","Remote People Provider","Remote SharePoint Provider"}, Values{"Exchange Search Provider","Local Peo
     * ple Provider","Local SharePoint Provider","OpenSearch Provider","Remote People Provider","Remote SharePoint Provider
     */
    providerType: {};
    /**
     * The URI to connect to the remote location
     */
    connectionUrl: string;
    /**
     * Present if the result source should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string, searchServiceAppName: string, query: string, providerType: {});
}
