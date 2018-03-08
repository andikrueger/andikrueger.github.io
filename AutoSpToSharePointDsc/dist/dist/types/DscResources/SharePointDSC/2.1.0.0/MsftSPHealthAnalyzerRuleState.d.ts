import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPHealthAnalyzerRuleState extends DscType {
    /**
     * The name of the rule exactly as it appears in central admin
     */
    name: string;
    /**
     * Should the rule be enabled?
     */
    enabled: boolean;
    /**
     * What is the scope of this rule"), ValueMap{"All Servers","Any Server"}, Values{"All Servers","Any Server
     */
    ruleScope: {};
    /**
     * How often should the rule check"), ValueMap{"Hourly","Daily","Weekly","Monthly","OnDemandOnly"}, Values{"Hourly","Daily","Weekly",
     * "Monthly","OnDemandOnly
     */
    schedule: {};
    /**
     * Should the rule fix itself automatically
     */
    fixAutomatically: boolean;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string, enabled: boolean);
}
