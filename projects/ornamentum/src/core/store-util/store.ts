import { Action } from './models/action.model';
import { CallableActionReducer } from './models/callable-action-reducer.model';
import { Store } from './models/store.model';
import { CallableEffect } from './models/callable-effect.model';

import { BehaviorSubject, isObservable, Observable, of, Subject } from 'rxjs';
import { distinctUntilChanged, flatMap, map, share } from 'rxjs/operators';
import { isEqual, isObject } from '../util/object-util';

export function createStore<S extends object, A extends Action>(
  reducers: CallableActionReducer<S, A>,
  effects?: CallableEffect<S, A>): Store<S, A> {
  const $action = new Subject<A | Observable<A>>();
  const $state = new BehaviorSubject<S>(undefined);
  const $stateObservable = $state.asObservable();

  const $flattenedAction = $action.asObservable().pipe(
    flatMap((action: A | Observable<A>): Observable<A> => {
      const $actionStream: Observable<A> = isObservable(action) ? action : of(action);
      return effects ? effects.call(null, $stateObservable, $actionStream) : $actionStream;
    }),
    share()
  );

  const stateSubscription = reducers($flattenedAction).subscribe($state);

  return {
    state: $stateObservable,
    dispatch: (action: A | Observable<A>): void => {
      $action.next(action);
    },
    dispose: (): void => {
      stateSubscription.unsubscribe();
      $action.complete();
      $state.complete();
    }
  };
}

export function createSelector<S extends object, R>($store: Observable<S>, selector: (state: S) => R): Observable<R> {
  return $store.pipe(
    map(selector),
    distinctUntilChanged((curr: any, prev: any): boolean => {
      return isObject(curr) ? isEqual(curr, prev) : curr === prev;
    })
  );
}
