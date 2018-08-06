import { Injector, Type } from '@angular/core';
import { ComponentLoaderOptions } from '../models/component-loader-options.model';

export interface ComponentLoader<T> {
  hide(): T;

  show(component: Type<T>, parentElement: HTMLElement, injector: Injector, options?: ComponentLoaderOptions): T;

  toggle(component: Type<T>, parentElement: HTMLElement, injector: Injector, options?: ComponentLoaderOptions): T;

  dispose(): void;
}
