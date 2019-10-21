import { CallableReducer } from './callable-reducer.model';

export interface MicroReducer<S extends object, P extends any> {
  type: string;
  reducer: CallableReducer<S, P>;
}
