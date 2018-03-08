import { DscType } from '../../../Dsc';
export declare class MsftSqlWaitForAG extends DscType {
    /**
     * Name of the cluster role/group to look for (normally the same as the Availability Group name).
     */
    name: string;
    /**
     * The interval, in seconds, to check for the presence of the cluster role/group. Default value is 20 seconds. When the cluster role/
     * group has been found the resource will wait for this amount of time once more before returning.
     */
    retryIntervalSec: number;
    /**
     * Maximum number of retries until the resource will timeout and throw an error. Default values is 30 times.
     */
    retryCount: number;
    constructor(name: string);
}
