import { DscType, DscCredential } from '../../../Dsc';
export declare class MsftSPUserProfileProperty extends DscType {
    /**
     * The internal name of the user profile property
     */
    name: string;
    /**
     * Present if the property should exist, absent if it should be removed"), ValueMap{"Present","Absent"}, Values{"Present","Absent
     */
    ensure: {};
    /**
     * The name of the user profile service application
     */
    userProfileService: string;
    /**
     * The display name of the property
     */
    displayName: string;
    /**
     * The type of the property"), ValueMap{"Big Integer","Binary","Boolean","Date","DateNoYear","Date Time","Email","Float","HTML","Inte
     * ger","Person","String (Single Value)","String (Multi Value)","TimeZone","Unique Identifier","URL"}, Values{"Big Integer","Binary",
     * "Boolean","Date","DateNoYear","Date Time","Email","Float","HTML","Integer","Person","String (Single Value)","String (Multi Value)"
     * ,"TimeZone","Unique Identifier","URL
     */
    type: {};
    /**
     * The description of the property
     */
    description: string;
    /**
     * The policy setting to apply to the property"), ValueMap{"Mandatory","Optin","Optout","Disabled"}, Values{"Mandatory","Optin","Opto
     * ut","Disabled
     */
    policySetting: {};
    /**
     * The privacy setting for the property"), ValueMap{"Public","Contacts","Organization","Manager","Private"}, Values{"Public","Contact
     * s","Organization","Manager","Private
     */
    privacySetting: {};
    /**
     * The name of the UPS connect to map this property to
     */
    mappingConnectionName: string;
    /**
     * The name of the property from the UPS connection to map to
     */
    mappingPropertyName: string;
    /**
     * The direction of the mapping, either Import or Export
     */
    mappingDirection: string;
    /**
     * The length of the field
     */
    length: number;
    /**
     * The display order to put the property in to the list at
     */
    displayOrder: number;
    /**
     * Is this field used for event logging
     */
    isEventLog: boolean;
    /**
     * Is this field visible when editing a users profile, or hidden from editing
     */
    isVisibleOnEditor: boolean;
    /**
     * Is this field visible when viewing a users profile
     */
    isVisibleOnViewer: boolean;
    /**
     * Is this field able to be edited by a user, or only an administrator
     */
    isUserEditable: boolean;
    /**
     * Is this field an alias that can be used to refer to a user by
     */
    isAlias: boolean;
    /**
     * Is this field able to be searched upon
     */
    isSearchable: boolean;
    /**
     * Can users override the default privacy policy
     */
    userOverridePrivacy: boolean;
    /**
     * The name of the term store to look up managed terms from
     */
    termStore: string;
    /**
     * The name of the term store group that terms are in for this field
     */
    termGroup: string;
    /**
     * The name of the term set to allow values to be selected from
     */
    termSet: string;
    /**
     * POWERSHELL 4 ONLY: The account to run this resource as, use PsDscRunAsCredential if using PowerShell 5"), EmbeddedInstance("MSFT_C
     * redential
     */
    installAccount: DscCredential;
    constructor(name: string, userProfileService: string);
}
