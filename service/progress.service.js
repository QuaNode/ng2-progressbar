import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/takeWhile';
/** Helper */
var clamp = function (n, min, max) {
    if (n < min)
        return min;
    if (n > max)
        return max;
    return n;
};
export var NgProgressService = (function () {
    function NgProgressService() {
        var _this = this;
        this.progress = 0;
        this.maximum = 1;
        this.minimum = 0.08;
        this.speed = 200;
        this.trickleSpeed = 300;
        /** Progress state */
        this.state = new Subject();
        /** Trickling stream */
        this.trickling = new Subject();
        this.trickling.switchMap(function () {
            return Observable
                .timer(0, _this.trickleSpeed)
                .takeWhile(function () { return _this.isStarted(); })
                .do(function () { return _this.inc(); });
        }).subscribe();
    }
    /** Start */
    NgProgressService.prototype.start = function () {
        if (!this.isStarted())
            this.set(this.minimum);
        this.trickling.next();
    };
    /** Done */
    NgProgressService.prototype.done = function () {
        /** if started complete the progress */
        if (this.isStarted()) {
            this.set(.3 + .5 * Math.random());
            this.set(this.maximum);
        }
    };
    /** Increment Progress */
    NgProgressService.prototype.inc = function (amount) {
        var n = this.progress;
        /** if it hasn't start, start */
        if (!this.isStarted())
            this.start();
        else {
            if (typeof amount !== 'number') {
                if (n >= 0 && n < 0.2)
                    amount = 0.1;
                else if (n >= 0.2 && n < 0.5)
                    amount = 0.04;
                else if (n >= 0.5 && n < 0.8)
                    amount = 0.02;
                else if (n >= 0.8 && n < 0.99)
                    amount = 0.005;
                else
                    amount = 0;
            }
            n = clamp(n + amount, 0, 0.994);
            this.set(n);
        }
    };
    /** Set progress state */
    NgProgressService.prototype.set = function (n) {
        var _this = this;
        this.progress = clamp(n, this.minimum, this.maximum);
        this.updateState(this.progress, true);
        /** if progress completed */
        if (n === this.maximum) {
            var hide_1 = function () {
                /** reset progress
                 * Keep it { 0, false } to fadeOut progress-bar after complete */
                _this.progress = 0;
                _this.updateState(_this.progress, false);
            };
            var complete = function () {
                /** complete progressbar
                 * { 1, false } to complete progress-bar before hiding */
                _this.updateState(_this.progress, false);
                setTimeout(hide_1, _this.speed);
            };
            setTimeout(complete, this.speed);
        }
    };
    /** Is progress started*/
    NgProgressService.prototype.isStarted = function () {
        return this.progress > 0 && this.progress < this.maximum;
    };
    /** Update Progressbar State */
    NgProgressService.prototype.updateState = function (progress, active) {
        if (!this.state.closed) this.state.next({
            value: progress,
            active: active
        });
    };
    NgProgressService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NgProgressService.ctorParameters = [];
    return NgProgressService;
}());
//# sourceMappingURL=progress.service.js.map
