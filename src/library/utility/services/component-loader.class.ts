import {
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef, ComponentRef
} from '@angular/core';
import { Type } from '@angular/core/src/type';
import { GlobalRefService } from './global-ref.service';

export class ComponentLoader<T> {

  private componentRef: ComponentRef<T>;
  private resizeEventHandler: () => void;
  private isVisible: boolean;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private globalRefService: GlobalRefService
  ) {
    this.isVisible = false;
  }

  private getResizeEventHandler(): () => void {
    return () => {
     this.hide();
    };
  }

  public show(component: Type<T>, parentElement: HTMLElement, options: any, pushWidth: number = 0) {
    // 1. Create a component reference from the component
    this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(this.componentRef.hostView);

    Object.assign(this.componentRef.instance, options);

    // 3. Get DOM element from component
    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // 4. Append DOM element to the body
    document.body.appendChild(domElem);

    this.componentRef.changeDetectorRef.markForCheck();
    this.componentRef.changeDetectorRef.detectChanges();

    const componentElement = this.componentRef.location.nativeElement as HTMLElement;

    debugger;
    const bodyClientRect = document.documentElement.getBoundingClientRect();
    const elementClientRect = parentElement.getBoundingClientRect();

    componentElement.style.top = `${elementClientRect.top - bodyClientRect.top + (elementClientRect.height || parentElement.offsetHeight)}px`;
    componentElement.style.left = `${elementClientRect.left - bodyClientRect.left - pushWidth}px`;
    componentElement.style.position = 'absolute';

    this.resizeEventHandler = this.getResizeEventHandler();

    this.globalRefService.window.addEventListener('resize', this.resizeEventHandler);

    this.isVisible = true;
  }

  public hide() {
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
    }

    this.globalRefService.window.removeEventListener(`resize`, this.resizeEventHandler);

    this.componentRef = null;
    this.resizeEventHandler = null;
    this.isVisible = false;
  }

  public toggle(component: Type<T>, parentElement: HTMLElement, options: any, pushWidth: number = 0) {
    if (this.isVisible) {
      this.hide();
    } else {
      this.show(component, parentElement, options, pushWidth);
    }
  }
}
