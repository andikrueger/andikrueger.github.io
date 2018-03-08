import { DscType } from '../../../Dsc';
export declare class MsftSqlAlias extends DscType {
    /**
     * The name of Alias (e.g. svr01\\inst01).
     */
    name: string;
    /**
     * Protocol to use when connecting. Valid values are 'TCP' or 'NP' (Named Pipes). Default value is 'TCP'."), ValueMap{"TCP","NP"}, Va
     * lues{"TCP","NP
     */
    protocol: {};
    /**
     * The SQL Server you are aliasing (the NetBIOS name or FQDN).
     */
    serverName: string;
    /**
     * The TCP port SQL is listening on. Only used when protocol is set to 'TCP'. Default value is port 1433.
     */
    tcpPort: number;
    /**
     * The UseDynamicTcpPort specify that the Net-Library will determine the port dynamically. The port specified in Port number will not
     *  be used. Default value is '$false'.
     */
    useDynamicTcpPort: boolean;
    /**
     * Determines whether the alias should be added or removed. Default value is 'Present'"), ValueMap{"Present","Absent"}, Values{"Prese
     * nt","Absent
     */
    ensure: {};
    constructor(name: string, serverName: string);
}
