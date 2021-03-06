import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/takeWhile';
export declare class NgProgressService {
    progress: number;
    maximum: number;
    minimum: number;
    speed: number;
    trickleSpeed: number;
    /** Progress state */
    state: Subject<{}>;
    /** Trickling stream */
    trickling: Subject<{}>;
    constructor();
    /** Start */
    start(): void;
    /** Done */
    done(): void;
    /** Increment Progress */
    inc(amount?: any): void;
    /** Set progress state */
    set(n: any): void;
    /** Is progress started*/
    isStarted(): boolean;
    /** Update Progressbar State */
    updateState(progress: any, active: any): void;
}
