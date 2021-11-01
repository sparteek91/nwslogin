import { Injectable } from '@angular/core';
import { IVendorInfo } from '../../interfaces';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    vendorInfo: IVendorInfo = {};

    constructor() { }
}