import { Action } from './action.model';

export type CallableReducer<S extends any, P extends any> = (state: S, payload: P) => S;
