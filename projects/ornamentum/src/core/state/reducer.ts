import { Action } from './models/action.model';
import { CallableReducer } from './models/callable-reducer.model';
import { CallableActionReducer } from './models/callable-action-reducer.model';
import { ReducersMapObject } from './models/reducers-map-object.model';

import { combineLatest, isObservable, Observable, of } from 'rxjs';
import { distinctUntilChanged, flatMap, map, scan, startWith } from 'rxjs/operators';

export function createReducer<S extends object, A extends Action<any>>(state: S, reducer: CallableReducer<S, A>)
  : CallableActionReducer<S, A> {
  return ($action: Observable<A>): Observable<S> => {
    return $action.pipe(
      flatMap((action: A) => {
        return isObservable(action) ? action : of(action);
      }),
      startWith(state as object),
      scan(reducer)
    );
  };
}

class CallableCombinedReduced<T, U> {
}

export function combineReducers<S extends object, A extends Action<any>>(reducers: ReducersMapObject<S, A>): CallableCombinedReduced<A, S> {
  const keys = Object.keys(reducers);
  const values = Object.values(reducers);

  return ($action: Observable<A>): Observable<S> => {
    return combineLatest([
      ...values.map((reducer: CallableActionReducer<any, A>): Observable<any> => {
        const $state = reducer.call(null, $action) as Observable<any>;
        return $state.pipe(distinctUntilChanged());
      })
    ]).pipe(
      map((state: Array<S[keyof S]>) => {
        const obj = {} as S;
        keys.map((key, index) => {
          obj[key] = state[index];
        });

        return obj;
      })
    );
  };
}
