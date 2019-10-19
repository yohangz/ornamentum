import { Action } from './models/action.model';
import { CallableActionReducer } from './models/callable-action-reducer.model';
import { CallableActionEffect } from './models/callable-action-effect.model';
import { Store } from './models/store.model';

import {BehaviorSubject, isObservable, Observable, of, Subject} from 'rxjs';
import {distinctUntilChanged, flatMap, map} from 'rxjs/operators';

export function createStore<S extends object, A extends Action>(
  reducers: CallableActionReducer<S, A>,
  effects?: CallableActionEffect<A>): Store<S, A> {
  const $action = new Subject<A | Observable<A>>();
  const $state = new BehaviorSubject<S>(undefined);

  const $flattenedAction = $action.asObservable().pipe(
    flatMap((action: A | Observable<A>): Observable<A> => {
      const $actionStream: Observable<A> = isObservable(action) ? action : of(action);
      return effects ? effects($actionStream) : $actionStream;
    })
  );

  const stateSubscription = reducers($flattenedAction).subscribe($state);

  return {
    state: $state.asObservable(),
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
    distinctUntilChanged()
  );
}
