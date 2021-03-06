import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ProgressComponent } from './components/progress/progress.component';
import { NgProgressService } from './service/progress.service';
import { NgProgressCustomBrowserXhr } from './service/browser-xhr.provider';
export var NgProgressModule = (function () {
    function NgProgressModule() {
    }
    NgProgressModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    providers: [
                        NgProgressService,
                        NgProgressCustomBrowserXhr
                    ],
                    declarations: [
                        ProgressComponent,
                        ProgressBarComponent
                    ],
                    exports: [
                        ProgressComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    NgProgressModule.ctorParameters = [];
    return NgProgressModule;
}());
export { NgProgressService, NgProgressCustomBrowserXhr, ProgressComponent };
//# sourceMappingURL=progress.module.js.map