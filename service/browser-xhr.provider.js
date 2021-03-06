var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Injectable } from '@angular/core';
import { BrowserXhr } from '@angular/http';
import { NgProgressService } from './progress.service';
export var NgProgressCustomBrowserXhr = (function (_super) {
    __extends(NgProgressCustomBrowserXhr, _super);
    function NgProgressCustomBrowserXhr(service) {
        _super.call(this);
        this.service = service;
        this.currentRequest = 0;
    }
    NgProgressCustomBrowserXhr.prototype.build = function () {
        var _this = this;
        var xhr = _super.prototype.build.call(this);
        xhr.onload = function (evt) { return _this.done(); };
        xhr.onerror = function (evt) { return _this.done(); };
        xhr.onabort = function (evt) { return _this.done(); };
        xhr.onloadstart = function (event) {
            _this.currentRequest++;
            if (!_this.service.isStarted())
                _this.service.start();
            // TODO: do some progress magic here
            // if (event.lengthComputable) {
        };
        // TODO: use event information to compute pending
        // xhr.onprogress = (event) => {};
        return (xhr);
    };
    NgProgressCustomBrowserXhr.prototype.done = function () {
        this.currentRequest--;
        if (this.currentRequest === 0) {
            this.service.done();
        }
    };
    NgProgressCustomBrowserXhr.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NgProgressCustomBrowserXhr.ctorParameters = [
        { type: NgProgressService, },
    ];
    return NgProgressCustomBrowserXhr;
}(BrowserXhr));
//# sourceMappingURL=browser-xhr.provider.js.map