import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPSearchCrawlRule extends DscType {
    /**
     * The name of the search service application
     */
    path: string;
    /**
     * The name of the search service application
     */
    serviceAppName: string;
    /**
     * Authentication type used by the crawl rule"), ValueMap{"DefaultRuleAccess","BasicAccountRuleAccess","CertificateRuleAccess","NTLMA
     * ccountRuleAccess","FormRuleAccess","CookieRuleAccess","AnonymousAccess"}, Values{"DefaultRuleAccess","BasicAccountRuleAccess","Cer
     * tificateRuleAccess","NTLMAccountRuleAccess","FormRuleAccess","CookieRuleAccess","AnonymousAccess
     */
    authenticationType: {};
    /**
     * The type of the rule"), ValueMap{"InclusionRule","ExclusionRule"}, Values{"InclusionRule","ExclusionRule
     */
    ruleType: {};
    /**
     *
     */
    crawlConfigurationRules: {}[];
    /**
     * The credentials used for this crawl rule (used for types BasicAccountRuleAccess and NTLMAccountRuleAccess)"), EmbeddedInstance("MS
     * FT_Credential
     */
    authenticationCredentials: DscCredential;
    /**
     * The certificate used for this crawl rule (used for type CertificateRuleAccess)
     */
    certificateName: string;
    /**
     * Present if the crawl rule should exist, absent if it should not"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(path: string, serviceAppName: string);
}
