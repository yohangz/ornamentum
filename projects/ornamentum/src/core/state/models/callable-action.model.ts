import { Observable } from 'rxjs';
import { Action } from './action.model';

export type CallableAction<T extends object> = (payload: T | Observable<T>) => Action<T>;
