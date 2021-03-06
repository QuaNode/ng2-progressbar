import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { NgProgressService } from '../../service/progress.service';
export var ProgressComponent = (function () {
    function ProgressComponent(progress) {
        /** Progress options  */
        this.ease = 'linear';
        this.positionUsing = 'margin';
        this.showSpinner = true;
        this.direction = 'leftToRightIncreased';
        this.color = '#CC181E';
        this.thick = false;
        this.maximum = 1;
        this.minimum = 0.08;
        this.speed = 200;
        this.trickleSpeed = 300;
        this.progress = progress;
    }
    ProgressComponent.prototype.ngOnChanges = function (changes) {
        var minChng = changes['minimum'];
        var maxChng = changes['maximum'];
        var spdChng = changes['speed'];
        var tklSpdChng = changes['trickleSpeed'];
        var tglChng = changes['toggle'];
        if (minChng) {
            if (typeof minChng.currentValue !== 'undefined' && minChng.currentValue !== minChng.previousValue) {
                if (minChng.currentValue < 0 || minChng.currentValue > 1) {
                    throw 'Input [minimum] must be between 0 and 1';
                }
                else {
                    this.progress.minimum = minChng.currentValue;
                }
            }
        }
        if (maxChng) {
            if (typeof maxChng.currentValue !== 'undefined' && maxChng.currentValue !== maxChng.previousValue) {
                if (maxChng.currentValue < 0 || maxChng.currentValue > 1) {
                    throw 'Input [maximum] must be between 0 and 1';
                }
                else {
                    this.progress.maximum = maxChng.currentValue;
                }
            }
        }
        if (spdChng) {
            if (typeof spdChng.currentValue !== 'undefined' && spdChng.currentValue !== spdChng.previousValue) {
                this.progress.speed = spdChng.currentValue;
            }
        }
        if (tklSpdChng) {
            if (typeof tklSpdChng.currentValue !== 'undefined' && tklSpdChng.currentValue !== tklSpdChng.previousValue) {
                this.progress.trickleSpeed = tklSpdChng.currentValue;
            }
        }
        if (tglChng) {
            if (typeof tglChng.currentValue !== 'undefined' && tglChng.currentValue !== tglChng.previousValue) {
                if (tglChng.currentValue) {
                    this.progress.start();
                }
                else {
                    this.progress.done();
                }
            }
        }
    };
    ProgressComponent.prototype.ngOnDestroy = function () {
        this.progress.done();
        this.progress.state.unsubscribe();
        this.progress.trickling.unsubscribe();
    };
    ProgressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-progress',
                    template: "\n    <ng-progress-bar\n      [speed]=\"speed\"\n      [positionUsing]=\"positionUsing\"\n      [ease]=\"ease\"\n      [showSpinner]=\"showSpinner\"\n      [direction]=\"direction\"\n      [color]=\"color\"\n      [thick]=\"thick\"\n      [state]=\"progress.state | async\"\n    ></ng-progress-bar>\n  ",
                    styles: ["\n    :host {\n      pointer-events: none;\n      position: relative;\n      z-index: 65535;\n    }\n\n    .ng-progress {\n      z-index: 1031;\n      top: 0;\n      left: 0;\n      width: 100%;\n      position: fixed;\n      zoom: 1;\n      filter: alpha(opacity=0);\n      opacity: 0;\n      transition: opacity 200ms linear;\n    }\n\n    .active {\n      filter: alpha(opacity=100);\n      opacity: 1;\n      transition: none;\n    }\n\n    .bar {\n      position: absolute;\n      width: 100%;\n      height: 2px;\n    }\n\n    .thick .bar {\n      height: 3px;\n    }\n\n    .bar-shadow {\n      display: block;\n      position: absolute;\n      right: 0;\n      top: -3px;\n      width: 100px;\n      height: 100%;\n      opacity: 1.0;\n      -webkit-transform: rotate(3deg);\n      -ms-transform: rotate(3deg);\n      transform: rotate(3deg);\n    }\n\n\n    .thick .bar-shadow {\n      top: -4px;\n      -webkit-transform: rotate(4deg);\n      -ms-transform: rotate(4deg);\n      transform: rotate(4deg);\n    }\n\n    .thick .spinner-icon {\n      width: 24px;\n      height: 24px;\n      border: solid 3px transparent;\n    }\n\n    /* Remove these to get rid of the spinner */\n    .spinner {\n      display: block;\n      position: fixed;\n      z-index: 1031;\n      top: 15px;\n      right: 15px;\n    }\n\n    .spinner-icon {\n      width: 18px;\n      height: 18px;\n      box-sizing: border-box;\n\n      border: solid 2px transparent;\n      border-radius: 50%;\n\n      -webkit-animation: nprogress-spinner 400ms linear infinite;\n      animation: nprogress-spinner 400ms linear infinite;\n    }\n\n    .anti-clockwise .spinner-icon {\n      -webkit-animation-direction: reverse;\n      animation-direction: reverse;\n    }\n\n    @-webkit-keyframes nprogress-spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n      }\n      100% {\n        -webkit-transform: rotate(360deg);\n      }\n    }\n\n    @keyframes nprogress-spinner {\n      0% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(360deg);\n      }\n    }\n  "],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    ProgressComponent.ctorParameters = [
        { type: NgProgressService, },
    ];
    ProgressComponent.propDecorators = {
        'ease': [{ type: Input },],
        'positionUsing': [{ type: Input },],
        'showSpinner': [{ type: Input },],
        'direction': [{ type: Input },],
        'color': [{ type: Input },],
        'thick': [{ type: Input },],
        'maximum': [{ type: Input },],
        'minimum': [{ type: Input },],
        'speed': [{ type: Input },],
        'trickleSpeed': [{ type: Input },],
        'toggle': [{ type: Input },],
    };
    return ProgressComponent;
}());
//# sourceMappingURL=progress.component.js.map
