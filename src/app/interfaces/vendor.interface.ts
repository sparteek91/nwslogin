export interface IVendorInfo {
    address?: IVendorAddress,
    drug_license?: string,
    gstin?: string,
    id?: number,
    pan?: string,
    primary_contact_name?: string,
    primary_contact_no?: string,
    vendor_status?: number,  // 1: active, 2: inactive
    user?: IGeneralInfo
}

interface IGeneralInfo {
    email?: string,
    name?: string,
    phone_no?: string
}

interface IVendorAddress {
    address_line?: string,
    city?: string,
    state?: string,
    pincode?: number,
    longitude?: any,
    latitude?: any
}