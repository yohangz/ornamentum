import { Observable } from 'rxjs';

import { Action } from './action.model';

export interface Store<S extends object, A extends Action<any>> {
  state: Observable<S>;
  dispatch: (action: A) => void;
  dispose: () => void;
}
