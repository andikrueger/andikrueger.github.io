export declare class DscCredential {
    private userName;
    private password;
    private domainName?;
    constructor(userName: string, password: string, domainName?: string);
    toString: () => string;
}
