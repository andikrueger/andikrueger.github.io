import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSqlScript extends DscType {
    /**
     * The name of an instance of the Database Engine. For a default instance, only specify the computer name. For a named instance, use
     * the format ComputerName\\InstanceName
     */
    serverInstance: string;
    /**
     * Path to the T-SQL file that will perform Set action.
     */
    setFilePath: string;
    /**
     * Path to the T-SQL file that will perform Get action. Any values returned by the T-SQL queries will also be returned by the cmdlet
     * Get-DscConfiguration through the 'GetResult' property.
     */
    getFilePath: string;
    /**
     * Path to the T-SQL file that will perform Test action. Any script that does not throw an error or returns null is evaluated to true
     * . The cmdlet Invoke-Sqlcmd treats T-SQL Print statements as verbose text, and will not cause the test to return false.
     */
    testFilePath: string;
    /**
     * The credentials to authenticate with, using SQL Authentication. To authenticate using Windows Authentication, assign the credentia
     * ls to the built-in parameter 'PsDscRunAsCredential'. If both parameters 'Credential' and 'PsDscRunAsCredential' are not assigned,
     * then SYSTEM account will be used to authenticate using Windows Authentication.
     */
    credential: DscCredential;
    /**
     * Specifies, as an integer, the number of seconds after which the T-SQL script execution will time out.  In some SQL Server versions
     *  there is a bug in Invoke-Sqlcmd where the normal default value 0 (no timeout) is not respected and the default value is incorrect
     * ly set to 30 seconds.
     */
    queryTimeout: number;
    /**
     *
     */
    variable: string[][];
    constructor(serverInstance: string, setFilePath: string, getFilePath: string, testFilePath: string);
}
