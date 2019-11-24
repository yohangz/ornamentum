import { Action } from './models/action.model';

import { merge, MonoTypeOperatorFunction, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CallableAction } from './models/callable-action.model';
import { CallableEffect } from './models/callable-effect.model';
import { MicroEffect } from './models/micro-effect.model';

function ofType<A extends Action>(actionRef: CallableAction<A>): MonoTypeOperatorFunction<A> {
  return filter((action: A) => action.type === (actionRef as any).type);
}

export function createEffect<
  S extends object,
  C extends CallableAction,
  A extends ReturnType<C>>(actionRef: C, effectRef: CallableEffect<S, A>): MicroEffect<S, A> {
  return (state: Observable<S>, action$: Observable<A>): Observable<A> => {
    return effectRef(state, action$.pipe(ofType(actionRef)));
  };
}

export function combineEffects<S extends object, A extends Action>(...effects: Array<MicroEffect<S, A>>): CallableEffect<S, A> {
  return ($state: Observable<S>, action$: Observable<A>): Observable<A> => {
    const $effects = effects.map((effect: MicroEffect<S, A>) => {
      return effect.call(null, $state, action$);
    });

    return merge(action$, ...$effects);
  };
}
