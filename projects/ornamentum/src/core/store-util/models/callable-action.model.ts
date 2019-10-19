import { Action } from './action.model';

export type CallableAction<T extends any = any> = (payload: T) => Action<T>;
