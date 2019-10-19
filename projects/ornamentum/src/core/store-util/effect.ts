import { Action } from './models/action.model';

import { MonoTypeOperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

export function ofType<T extends string, A extends Action>(type: string): MonoTypeOperatorFunction<A> {
  return filter((action: A) => type === action.type);
}

