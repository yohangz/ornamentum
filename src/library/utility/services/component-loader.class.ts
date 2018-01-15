import {
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef, ComponentRef
} from '@angular/core';

import { Type } from '@angular/core/src/type';

import { GlobalRefService } from './global-ref.service';
import { Observable } from 'rxjs/Observable';

export interface ComponentLoader<T> {
  show(component: Type<T>, parentElement: HTMLElement, options: any, floatLeft?: number, floatTop?: number, relativeParentElement?: HTMLElement): void;

  toggle(component: Type<T>, parentElement: HTMLElement, options: any, floatLeft?: number, floatTop?: number, relativeParentElement?: HTMLElement): void;

  hide(): void;

  dispose(): void;
}

export class AbsoluteComponentLoader<T> implements ComponentLoader<T> {
  private componentRef: ComponentRef<T>;
  private resizeEventHandler: () => void;
  private isVisible: boolean;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector,
              private globalRefService: GlobalRefService) {
    this.isVisible = false;
  }

  private getResizeEventHandler(): () => void {
    return () => {
      this.hide();
    };
  }

  private setPosition(parentElement: HTMLElement, holderElement: HTMLElement, floatLeft: number, floatTop: number ): void {
    const bodyClientRect = holderElement.getBoundingClientRect();
    const elementClientRect = parentElement.getBoundingClientRect();

    const componentElement = this.componentRef.location.nativeElement as HTMLElement;
    componentElement.style.top = `${elementClientRect.top - bodyClientRect.top + floatTop}px`;
    componentElement.style.left = `${elementClientRect.left - bodyClientRect.left + floatLeft}px`;
    componentElement.style.position = 'absolute';
    componentElement.style.display = 'block';

    Observable.fromEvent(this.globalRefService.window, 'resize')
      .take(1)
      .subscribe(() => {
        this.hide();
      });
  }

  public show(component: Type<T>, parentElement: HTMLElement, options: any, floatLeft: number = 0, floatTop: number = 0, relativeParentElement?: HTMLElement): void {
    if (this.componentRef) {
      this.setPosition(parentElement, relativeParentElement || this.globalRefService.window.document.documentElement, floatLeft, floatTop);
      this.isVisible = true;
      return;
    }

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

    this.setPosition(parentElement, relativeParentElement || this.globalRefService.window.document.documentElement, floatLeft, floatTop);

    // 4. Append DOM element to the body
    (relativeParentElement || this.globalRefService.window.document.body).appendChild(domElem);

    this.componentRef.changeDetectorRef.markForCheck();
    this.componentRef.changeDetectorRef.detectChanges();

    this.resizeEventHandler = this.getResizeEventHandler();

    this.isVisible = true;
  }

  public hide(): void {
    if (this.componentRef) {
      this.componentRef.location.nativeElement.style.display = 'none';
    }

    this.isVisible = false;
  }

  public dispose(): void {
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
    }

    this.componentRef = null;
    this.resizeEventHandler = null;
  }

  public toggle(component: Type<T>, parentElement: HTMLElement, options: any, floatLeft: number = 0, floatTop: number = 0, relativeParentElement?: HTMLElement): void {
    if (this.isVisible) {
      this.hide();
    } else {
      this.show(component, parentElement, options, floatLeft, floatTop, relativeParentElement);
    }
  }
}

