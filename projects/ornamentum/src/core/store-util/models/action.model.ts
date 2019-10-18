import { Observable } from 'rxjs';

export interface Action<T extends object> {
  type: string;
  payload?: T | Observable<T>;
}
