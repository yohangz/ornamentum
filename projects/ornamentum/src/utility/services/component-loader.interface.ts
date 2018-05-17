import { Injector, Type } from '@angular/core';

export interface ComponentLoader<T> {
  withFloatLeft(left: number): ComponentLoader<T>;

  withFloatTop(top: number): ComponentLoader<T>;

  withRelativeParentElement(parent: HTMLElement): ComponentLoader<T>;

  withContext(context: any): ComponentLoader<T>;

  hide(): T;

  show(component: Type<T>, parentElement: HTMLElement, injector: Injector): T;

  toggle(component: Type<T>, parentElement: HTMLElement, injector: Injector): T;

  dispose(): void;
}
