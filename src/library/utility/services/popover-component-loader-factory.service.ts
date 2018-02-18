import { ApplicationRef, ComponentFactoryResolver, Injectable } from '@angular/core';

import { ComponentLoader } from './component-loader.interface';
import { PopoverComponentLoader } from './popover-component-loader.class';

import { GlobalRefService } from './global-ref.service';

@Injectable()
export class PopoverComponentLoaderFactoryService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private globalRefService: GlobalRefService) {
  }

  public createLoader<T>(): ComponentLoader<T> {
    return new PopoverComponentLoader<T>(this.componentFactoryResolver, this.appRef, this.globalRefService);
  }
}
