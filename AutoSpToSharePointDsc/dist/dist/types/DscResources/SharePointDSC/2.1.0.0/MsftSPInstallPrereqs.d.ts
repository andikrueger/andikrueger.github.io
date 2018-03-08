import { DscType } from '../../../Dsc';
export declare class MsftSPInstallPrereqs extends DscType {
    /**
     * The full path to prerequisiteinstaller.exe
     */
    installerPath: string;
    /**
     * Should the installer download prerequisites from the internet or not
     */
    onlineMode: boolean;
    /**
     * The path to the Windows Server Operating System SXS source files, for use in closed environments without access to Windows Update
     */
    sXSpath: string;
    /**
     * The path to the installer for this prerequisite (SP2013 and SP2016)
     */
    sQLNCli: string;
    /**
     * The path to the installer for this prerequisite (SP2013 only)
     */
    powerShell: string;
    /**
     * The path to the installer for this prerequisite (SP2013 only)
     */
    nETFX: string;
    /**
     * The path to the installer for this prerequisite (SP2013 only)
     */
    iDFX: string;
    /**
     * The path to the installer for this prerequisite (SP2013 and SP2016)
     */
    sync: string;
    /**
     * The path to the installer for this prerequisite (SP2013 and SP2016)
     */
    appFabric: string;
    /**
     * The path to the installer for this prerequisite (SP2013 and SP2016)
     */
    iDFX11: string;
    /**
     * The path to the installer for this prerequisite (SP2013 and SP2016)
     */
    mSIPCClient: string;
    /**
     * The path to the installer for this prerequisite (SP2013 only)
     */
    wCFDataServices: string;
    /**
     * The path to the installer for this prerequisite (SP2013 only)
     */
    kB2671763: string;
    /**
     * The path to the installer for this prerequisite (SP2013 and SP2016)
     */
    wCFDataServices56: string;
    /**
     * The path to the installer for this prerequisite (SP2016 only)
     */
    mSVCRT11: string;
    /**
     * The path to the installer for this prerequisite (SP2016 only)
     */
    mSVCRT14: string;
    /**
     * The path to the installer for this prerequisite (SP2016 only)
     */
    kB3092423: string;
    /**
     * The path to the installer for this prerequisite (SP2016 only)
     */
    oDBC: string;
    /**
     * The path to the installer for this prerequisite (SP2016 only)
     */
    dotNetFx: string;
    /**
     * Present to install the prerequisites. Absent is currently not supported"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    constructor(installerPath: string, onlineMode: boolean);
}
