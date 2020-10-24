import { BrowserXhr } from '@angular/http';
import { NgProgressService } from './progress.service';
export declare class NgProgressCustomBrowserXhr extends BrowserXhr {
    private service;
    currentRequest: number;
    constructor(service: NgProgressService);
    build(): any;
    private done();
}
