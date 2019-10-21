import { Action } from './action.model';

export type PayloadType<T extends Action> = T extends Action<infer U> ? U : never;
