import { Action } from './models/action.model';
import { CallableActionReducer } from './models/callable-action-reducer.model';
import { CallableActionEffect } from './models/callable-action-effect.model';
import { Store } from './models/store.model';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

function createStore<S extends object, A extends Action<any>>(
  reducers: CallableActionReducer<S, A>,
  effects?: CallableActionEffect<A>): Store<S, A> {
  const $action = new Subject<A>();
  const $state = new BehaviorSubject<S>(undefined);
  const $actionObservable: Observable<A> = $action.asObservable();
  const $dispatcher = effects ? effects($actionObservable) : $actionObservable;
  const stateSubscription = reducers($dispatcher).subscribe($state);

  return {
    state: $state.asObservable(),
    dispatch: (action: A): void => {
      $action.next(action);
    },
    dispose: (): void => {
      stateSubscription.unsubscribe();
      $action.complete();
      $state.complete();
    }
  };
}

function createSelector<S extends object, R>($store: Observable<S>, selector: (state: S) => R): Observable<R> {
  return $store.pipe(
    map(selector),
    distinctUntilChanged()
  );
}
