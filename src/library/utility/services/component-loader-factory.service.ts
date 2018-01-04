import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { ComponentLoader } from './component-loader.class';
import { GlobalRefService } from './global-ref.service';

@Injectable()
export class ComponentLoaderFactory {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private globalRefService: GlobalRefService
  ) {}

  public createLoader<T>(): ComponentLoader<T> {
    return new ComponentLoader<T>(this.componentFactoryResolver, this.appRef, this.injector, this.globalRefService);
  }
}
