import { InjectionToken } from '@angular/core'

export let TOASTER_TOKEN = new InjectionToken('toastr') // TOASTER_TOKEN is a javascript object

export interface Toastr {
    success(message : string, title? : string) : void ;
    info(message : string, title? : string) : void ;
    warning(message : string, title? : string) : void ;
    error(message : string, title? : string) : void ;
}