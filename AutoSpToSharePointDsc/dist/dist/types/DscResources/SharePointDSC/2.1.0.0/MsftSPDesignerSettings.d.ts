import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPDesignerSettings extends DscType {
    /**
     * The URL of the web application or site collection to configure
     */
    url: string;
    /**
     * Define the scope of the configuration - either WebApplication or SiteCollection"), ValueMap{"WebApplication","SiteCollection"}, Va
     * lues{"WebApplication","SiteCollection
     */
    settingsScope: {};
    /**
     * Allow the use of SharePoint Designer
     */
    allowSharePointDesigner: boolean;
    /**
     * Allow pages to be un-ghosted by SharePoint Designer
     */
    allowDetachPagesFromDefinition: boolean;
    /**
     * Allow masterpages to be changed by SharePoint Designer
     */
    allowCustomiseMasterPage: boolean;
    /**
     * Allow site URL structure to be changed by SharePoint Designer
     */
    allowManageSiteURLStructure: boolean;
    /**
     * Allow users to create declarative workflows with SharePoint Designer
     */
    allowCreateDeclarativeWorkflow: boolean;
    /**
     * Allow users to save and re-publish declarative workflows with SharePoint Designer
     */
    allowSavePublishDeclarativeWorkflow: boolean;
    /**
     * Allow users to save declarative workflows as a template from SharePoint Designer
     */
    allowSaveDeclarativeWorkflowAsTemplate: boolean;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(url: string, settingsScope: {});
}
