import { OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { NgProgressService } from '../../service/progress.service';
export declare class ProgressComponent implements OnChanges, OnDestroy {
    progress: NgProgressService;
    /** Progress options  */
    ease: string;
    positionUsing: string;
    showSpinner: boolean;
    direction: string;
    color: string;
    thick: boolean;
    maximum: number;
    minimum: number;
    speed: number;
    trickleSpeed: number;
    /** Start/Stop Progressbar */
    toggle: any;
    constructor(progress: NgProgressService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
