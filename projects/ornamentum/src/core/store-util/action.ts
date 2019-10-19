import { Action } from './models/action.model';
import { CallableAction } from './models/callable-action.model';

function defineType<A extends any>(type: string, creator: CallableAction<A>): CallableAction<A> {
  return Object.defineProperty(creator, 'type', {
    value: type,
    writable: false,
  });
}

export function createAction<A extends any = void>(type: string): CallableAction<A> {
  return defineType(type, (payload: A): Action<A> => {
    return { type, payload };
  });
}
