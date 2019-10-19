export interface Action<T extends any = undefined> {
  type: string;
  payload?: T;
}
