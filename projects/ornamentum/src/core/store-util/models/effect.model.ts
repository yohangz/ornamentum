import { Action } from './action.model';
import { Observable } from 'rxjs';

export type Effect<A extends Action> = ($action: Observable<A>) => Observable<A>;
