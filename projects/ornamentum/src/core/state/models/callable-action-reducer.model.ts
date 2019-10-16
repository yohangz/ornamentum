import { Action } from './action.model';
import { Observable } from 'rxjs';

export type CallableActionReducer<S extends object, A extends Action<any>> = ($action: Observable<A>) => Observable<S>;
