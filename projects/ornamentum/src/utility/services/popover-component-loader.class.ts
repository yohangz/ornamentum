import { Injector, ComponentFactoryResolver, EmbeddedViewRef, ApplicationRef, ComponentRef, Type, Renderer2 } from '@angular/core';

import { take } from 'rxjs/operators';

import { Subscription } from 'rxjs';

import { ComponentLoader } from './component-loader.interface';

import { GlobalRefService } from './global-ref.service';
import { ResizeService } from './resize.service';

import { ComponentLoaderOptions } from '../models/component-loader-options.model';

/**
 * Popover dynamic component loader; Responsible of dynamically rendering angular components to show popover layout.
 */
export class PopoverComponentLoader<T> implements ComponentLoader<T> {
  private componentReference: ComponentRef<T>;
  private isVisible: boolean;
  private clickListener: () => void;
  private touchStartListener: () => void;
  private resizeEventSubscription: Subscription;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private globalRefService: GlobalRefService,
    private renderer: Renderer2,
    private resizeService: ResizeService
  ) {
    this.isVisible = false;
  }

  /**
   * Register close on click outside event; Hide event is triggered only if click target is not included in
   * exclusion elements collection.
   * @param exclude - Exclude DOM element reference collection.
   */
  private registerClickOutside(...exclude: HTMLElement[]): void {
    const trackOutsideClick = (event: Event) => {
      if (!exclude.some(el => {
        return el.contains(event.target as HTMLElement);
      })) {
        this.hide();
      }
    };

    this.clickListener = this.renderer.listen('document', 'click', trackOutsideClick);
    this.touchStartListener = this.renderer.listen('document', 'touchstart', trackOutsideClick);
  }

  /**
   * Set dynamic popover position relative to parent.
   * @param parentElement Parent element reference.
   * @param options Component loader options.
   */
  private setPosition(parentElement: HTMLElement, options: ComponentLoaderOptions): void {
    const holderElement =  options.relativeParentElement || parentElement;
    const bodyClientRect = holderElement.getBoundingClientRect();
    const elementClientRect = parentElement.getBoundingClientRect();

    let left = 0;
    let top = 0;

    if (options.position.includes('right')) {
      left = parentElement.offsetWidth;
    }

    if (options.position.includes('bottom')) {
      top = parentElement.offsetHeight;
    }

    const componentElement = this.componentReference.location.nativeElement as HTMLElement;
    componentElement.style.top = `${elementClientRect.top - bodyClientRect.top + top + options.floatTop}px`;
    componentElement.style.left = `${elementClientRect.left - bodyClientRect.left + left + options.floatLeft}px`;
    componentElement.style.position = 'absolute';
    componentElement.style.display = 'block';

    const childElement = componentElement.firstElementChild as HTMLElement;
    if (childElement) {
      if (options.position.includes('right')) {
        childElement.style.right = '0px';
      }

      if (options.position.includes('top')) {
        childElement.style.bottom = '0px';
      }

      childElement.style.position = 'absolute';
    }

    this.resizeEventSubscription = this.resizeService.resize.pipe(take(1)).subscribe(() => {
      this.hide();
    });
  }

  /**
   * Render component if not available, else display hidden component.
   * @param component Component class type.
   * @param parentElement Parent element to append the target component.
   * @param injector Component injector reference.
   * @param options Component loader options object.
   * @return Rendered component reference.
   */
  public show(component: Type<T>, parentElement: HTMLElement, injector: Injector, options: ComponentLoaderOptions): T {
    options = Object.assign(
      {
        closeOnOutsideClick: true,
        floatLeft: 0,
        floatTop: 0,
        position: 'bottom-left'
      },
      options
    );

    if (this.componentReference) {
      this.setPosition(parentElement, options);
      this.isVisible = true;
      return;
    }

    // 1. Create a component reference from the component
    this.componentReference = this.componentFactoryResolver.resolveComponentFactory(component).create(injector);

    if (options.context) {
      Object.assign(this.componentReference.instance, options.context);
    }

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(this.componentReference.hostView);

    // 3. Get DOM element from component
    const domElem = (this.componentReference.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    this.setPosition(parentElement, options);

    // 4. Append DOM element to the body
    (options.relativeParentElement || parentElement).appendChild(domElem);

    // Trigger change detection
    this.componentReference.changeDetectorRef.markForCheck();
    this.componentReference.changeDetectorRef.detectChanges();

    this.isVisible = true;

    if (options.closeOnOutsideClick) {
      this.registerClickOutside(parentElement, this.componentReference.location.nativeElement);
    }

    return this.componentReference.instance;
  }

  /**
   * Hide component if visible.
   * @return Rendered component reference.
   */
  public hide(): T {
    if (this.componentReference) {
      this.componentReference.location.nativeElement.style.display = 'none';
      this.isVisible = false;
      return this.componentReference.instance;
    }
  }

  /**
   * Toggle component display state or render if not available.
   * @param component Component class type.
   * @param parentElement Parent element to append the target component.
   * @param injector Component injector reference.
   * @param options Component loader options object.
   * @return Rendered component reference.
   */
  public toggle(component: Type<T>, parentElement: HTMLElement, injector: Injector, options?: ComponentLoaderOptions): T {
    return this.isVisible ? this.hide() : this.show(component, parentElement, injector, options);
  }

  /**
   * Dispose rendered component reference and bindings.
   */
  public dispose(): void {
    if (this.resizeEventSubscription) {
      this.resizeEventSubscription.unsubscribe();
    }

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
