import { CallableActionReducer } from './callable-action-reducer.model';
import { Action } from './action.model';

export type ReducersMapObject<S extends any, A extends Action> = {
  [K in keyof S]: CallableActionReducer<S[K], A>
};
