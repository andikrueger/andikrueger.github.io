import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSqlWindowsFirewall extends DscType {
    /**
     * An enumerated value that describes if the SQL firewall rules are is expected to be enabled on the machine.\nPresent {default}  \nA
     * bsent   \n"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * UNC path to the root of the source files for installation.
     */
    sourcePath: string;
    /**
     * SQL features to enable firewall rules for.
     */
    features: string;
    /**
     * SQL instance to enable firewall rules for.
     */
    instanceName: string;
    /**
     * Credentials used to access the path set in the parameter 'SourcePath'.
     */
    sourceCredential: DscCredential;
    constructor(features: string, instanceName: string);
}
