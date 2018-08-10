import {
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef,
  ComponentRef,
  Type, Renderer2
} from '@angular/core';

import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';

import { ComponentLoader } from './component-loader.interface';

import { GlobalRefService } from './global-ref.service';
import { ComponentLoaderOptions } from '../models/component-loader-options.model';

export class PopoverComponentLoader<T> implements ComponentLoader<T> {
  private componentReference: ComponentRef<T>;
  private isVisible: boolean;
  private clickListener: () => void;
  private touchStartListener: () => void;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private globalRefService: GlobalRefService,
              private renderer: Renderer2) {
    this.isVisible = false;
  }

  private registerClickOutside(...elements: HTMLElement[]): void {
    const trackOutsideClick = (event: Event) => {
      if (!elements.some((el) => el.contains(event.target as HTMLElement))) {
        this.hide();
      }
    };

    this.clickListener = this.renderer.listen('document', 'click', trackOutsideClick);
    this.touchStartListener = this.renderer.listen('document', 'touchstart', trackOutsideClick);
  }

  private setPosition(parentElement: HTMLElement, options: ComponentLoaderOptions): void {
    const holderElement = options.relativeParent || this.globalRefService.window.document.documentElement;
    const bodyClientRect = holderElement.getBoundingClientRect();
    const elementClientRect = parentElement.getBoundingClientRect();

    let left = 0;
    let top = 0;

    if (options.position === 'bottom-right' || options.position === 'top-right') {
      left = parentElement.offsetWidth;
    }

    if (options.position === 'bottom-right' || options.position === 'bottom-left') {
      top = parentElement.offsetHeight;
    }

    const componentElement = this.componentReference.location.nativeElement as HTMLElement;
    componentElement.style.top = `${elementClientRect.top - bodyClientRect.top + top +  options.floatTop}px`;
    componentElement.style.left = `${elementClientRect.left - bodyClientRect.left + left + options.floatLeft}px`;
    componentElement.style.position = 'absolute';
    componentElement.style.display = 'block';

    fromEvent(this.globalRefService.window, 'resize')
      .pipe(
        take(1)
      )
      .subscribe(() => {
        this.hide();
      });
  }

  public show(component: Type<T>, parentElement: HTMLElement, injector: Injector, options: ComponentLoaderOptions): T {
    options = Object.assign({
      closeOnOutsideClick: true,
      floatLeft: 0,
      floatTop: 0,
      position: 'bottom-left'
    }, options);

    if (this.componentReference) {
      this.setPosition(parentElement, options);
      this.isVisible = true;
      return;
    }

    // 1. Create a component reference from the component
    this.componentReference = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(injector);

    if (options.context) {
      Object.assign(this.componentReference.instance, options.context);
    }

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(this.componentReference.hostView);

    // 3. Get DOM element from component
    const domElem = (this.componentReference.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    this.setPosition(parentElement, options);

    // 4. Append DOM element to the body
    (options.relativeParent || this.globalRefService.window.document.body).appendChild(domElem);

    // Trigger change detection
    this.componentReference.changeDetectorRef.markForCheck();
    this.componentReference.changeDetectorRef.detectChanges();

    this.isVisible = true;

    if (options.closeOnOutsideClick) {
      this.registerClickOutside(parentElement, this.componentReference.location.nativeElement);
    }

    return this.componentReference.instance;
  }

  public hide(): T {
    if (this.componentReference) {
      this.componentReference.location.nativeElement.style.display = 'none';
      this.isVisible = false;
      return this.componentReference.instance;
    }
  }

  public toggle(component: Type<T>, parentElement: HTMLElement, injector: Injector, options?: ComponentLoaderOptions): T {
    return this.isVisible ? this.hide() : this.show(component, parentElement, injector, options);
  }

  public dispose(): void {
    if (this.componentReference) {
      this.appRef.detachView(this.componentReference.hostView);
      this.componentReference.destroy();
    }

    if (this.clickListener) {
      this.clickListener();
      this.clickListener = null;
    }

    if (this.touchStartListener) {
      this.touchStartListener();
      this.touchStartListener = null;
    }

    this.componentReference = null;
  }
}
