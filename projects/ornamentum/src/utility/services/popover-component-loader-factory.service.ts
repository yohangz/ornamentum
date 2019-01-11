import { ApplicationRef, ComponentFactoryResolver, Injectable, Renderer2 } from '@angular/core';

import { ComponentLoader } from './component-loader.interface';

import { GlobalRefService } from './global-ref.service';
import { ResizeService } from './resize.service';

import { PopoverComponentLoader } from './popover-component-loader.class';

/**
 * Popover component loader factory service
 */
@Injectable()
export class PopoverComponentLoaderFactoryService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private globalRefService: GlobalRefService,
              private resizeService: ResizeService) {
  }

  /**
   * Create new component loader
   * @param renderer Angular renderer reference
   * @return Popover component loader reference
   */
  public createLoader<T>(renderer: Renderer2): ComponentLoader<T> {
    return new PopoverComponentLoader<T>(this.componentFactoryResolver, this.appRef, this.globalRefService, renderer, this.resizeService);
  }
}
