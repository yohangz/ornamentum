import { Action } from './action.model';

export type CallableReducer<S extends object, A extends Action<any>> = (state: S, action: A) => S;
