import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
    }
    /** Styles for progressbar */
    ProgressBarComponent.prototype.barStyles = function () {
        var styles = {
            transition: "all " + this.speed + "ms " + this.ease,
            backgroundColor: this.color
        };
        /** Get positioning value */
        var n = (!this.state.value) ? {
            leftToRightIncreased: -100,
            leftToRightReduced: 0,
            rightToLeftIncreased: 100,
            rightToLeftReduced: 0
        }[this.direction] : this.toPercentage(this.state.value);
        switch (this.positionUsing) {
            case 'translate3d':
                styles = Object.assign({}, styles, {
                    transform: "translate3d(" + n + "%,0,0)",
                    '-webkit-transform': "translate3d(" + n + "%,0,0)",
                    '-moz-transform': "translate3d(" + n + "%,0,0)",
                    '-o-transform': "translate3d(" + n + "%,0,0)",
                    '-ms-transform': "translate3d(" + n + "%,0,0)"
                });
                break;
            case 'translate':
                styles = Object.assign({}, styles, {
                    transform: "translate(" + n + "%,0)",
                    '-webkit-transform': "translate(" + n + "%,0)",
                    '-moz-transform': "translate(" + n + "%,0)",
                    '-o-transform': "translate(" + n + "%,0)",
                    '-ms-transform': "translate(" + n + "%,0)"
                });
                break;
            default:
                styles = Object.assign({}, styles, {
                    marginLeft: n + "%"
                });
        }
        return styles;
    };
    /** Styles for progressbar tail */
    ProgressBarComponent.prototype.shadowStyles = function () {
        return {
            boxShadow: "0 0 10px " + this.color + ", 0 0 5px " + this.color
        };
    };
    ProgressBarComponent.prototype.toPercentage = function (n) {
        return ({
            leftToRightIncreased: -1 + n,
            leftToRightReduced: -n,
            rightToLeftIncreased: 1 - n,
            rightToLeftReduced: n
        }[this.direction]) * 100;
    };
    ProgressBarComponent.prototype.spinnerClasses = function () {
        return {
            leftToRightIncreased: 'clockwise',
            leftToRightReduced: 'anti-clockwise',
            rightToLeftIncreased: 'anti-clockwise',
            rightToLeftReduced: 'clockwise'
        }[this.direction];
    };
    ProgressBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-progress-bar',
                    template: "\n    <div class=\"ng-progress\" *ngIf=\"state\" [class.active]=\"state.active\" [class.thick]=\"thick\">\n      <div class=\"bar\" [ngStyle]=\"barStyles()\">\n        <div class=\"bar-shadow\" [ngStyle]=\"shadowStyles()\"></div>\n      </div>\n      <div *ngIf=\"showSpinner\" class=\"spinner\" [ngClass]=\"spinnerClasses()\">\n        <div class=\"spinner-icon\" [style.borderTopColor]=\"color\" [style.borderLeftColor]=\"color\"></div>\n      </div>\n    </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    ProgressBarComponent.ctorParameters = [];
    ProgressBarComponent.propDecorators = {
        'state': [{ type: Input },],
        'positionUsing': [{ type: Input },],
        'ease': [{ type: Input },],
        'speed': [{ type: Input },],
        'showSpinner': [{ type: Input },],
        'direction': [{ type: Input },],
        'thick': [{ type: Input },],
        'color': [{ type: Input },],
    };
    return ProgressBarComponent;
}());
//# sourceMappingURL=progress-bar.component.js.map