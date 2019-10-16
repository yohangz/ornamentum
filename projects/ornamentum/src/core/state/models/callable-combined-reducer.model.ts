import { Action } from './action.model';
import { Observable } from 'rxjs';

export type CallableCombinedReducer<A extends Action<any>, S extends object> = ($action: Observable<A>) => Observable<S>;
