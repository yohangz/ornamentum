import { Observable } from 'rxjs';
import { Action } from './action.model';

export type CallableActionEffect<A extends Action> = (action$: Observable<A>) => Observable<A>;
