import { DscType } from '../../../Dsc';
export declare class MsftSqlAGListener extends DscType {
    /**
     * The SQL Server instance name of the primary replica.
     */
    instanceName: string;
    /**
     * The host name or FQDN of the primary replica.
     */
    serverName: string;
    /**
     * The name of the availability group listener, max 15 characters. This name will be used as the Virtual Computer Object (VCO).
     */
    name: string;
    /**
     * If the availability group listener should be present or absent. Default value is 'Present'."), ValueMap{"Present","Absent"}, Value
     * s{"Present","Absent
     */
    ensure: {};
    /**
     * The name of the availability group to which the availability group listener is or will be connected.
     */
    availabilityGroup: string;
    /**
     *
     */
    ipAddress: string[][];
    /**
     * The port used for the availability group listener
     */
    port: number;
    /**
     * If DHCP should be used for the availability group listener instead of static IP address.
     */
    dHCP: boolean;
    constructor(instanceName: string, serverName: string, name: string, availabilityGroup: string);
}
