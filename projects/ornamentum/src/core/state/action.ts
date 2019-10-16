import { Action } from './models/action.model';
import { CallableAction } from './models/callable-action.model';

import { Observable } from 'rxjs';

export function createAction<T extends object>(type: string): CallableAction<T> {
  return (payload: T | Observable<T>): Action<T> => {
    return { type, payload };
  };
}
