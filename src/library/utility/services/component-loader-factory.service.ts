import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { ComponentLoader } from './component-loader.class';

@Injectable()
export class ComponentLoaderFactory {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  public createLoader<T>(): ComponentLoader<T> {
    return new ComponentLoader<T>(this.componentFactoryResolver, this.appRef, this.injector);
  }
}
