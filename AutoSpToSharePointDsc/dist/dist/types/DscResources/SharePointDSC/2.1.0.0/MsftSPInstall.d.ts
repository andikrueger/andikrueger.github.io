import { DscType } from '../../../Dsc';
export declare class MsftSPInstall extends DscType {
    /**
     * The directory that contains all of the SharePoint binaries
     */
    binaryDir: string;
    /**
     * The product key to use during the installation
     */
    productKey: string;
    /**
     * The install directory to use in the installation, leave blank to use the setup defaults
     */
    installPath: string;
    /**
     * The data directory to use in the installation, leave blank to use the setup defaults
     */
    dataPath: string;
    /**
     * Present to install SharePoint. Absent is currently not supported"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    constructor(binaryDir: string, productKey: string);
}
