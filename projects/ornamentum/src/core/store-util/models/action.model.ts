export interface Action<T extends any = any> {
  type: string;
  payload?: T;
}
