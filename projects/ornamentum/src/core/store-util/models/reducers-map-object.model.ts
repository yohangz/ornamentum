import { CallableActionReducer } from './callable-action-reducer.model';
import { Action } from './action.model';

export type ReducersMapObject<S extends object, A extends Action<any>> = {
  [K in keyof S]: CallableActionReducer<any, A>
};
