import { Observable } from 'rxjs';
import { Action } from './action.model';

export type CallableActionEffect<A extends Action<any>> = (action$: Observable<A>) => Observable<A>;
