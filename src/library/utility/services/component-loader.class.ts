import {
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef,
  ComponentRef,
  Type
} from '@angular/core';

import { GlobalRefService } from './global-ref.service';

import { Observable } from 'rxjs/Observable';

export interface ComponentLoader<T> {
  withFloatLeft(left: number): ComponentLoader<T>;

  withFloatTop(top: number): ComponentLoader<T>;

  withRelativeParentElement(parent: HTMLElement): ComponentLoader<T>;

  withContext(context: any): ComponentLoader<T>;

  hide(): T;

  show(component: Type<T>, parentElement: HTMLElement): T;

  toggle(component: Type<T>, parentElement: HTMLElement): T;

  dispose(): void;
}

export class AbsoluteComponentLoader<T> implements ComponentLoader<T> {
  private componentReference: ComponentRef<T>;
  private isVisible: boolean;

  private floatLeft = 0;
  private floatTop = 0;
  private context: any;
  private relativeParentElement: HTMLElement;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector,
              private globalRefService: GlobalRefService) {
    this.isVisible = false;
  }

  private setPosition(parentElement: HTMLElement, holderElement: HTMLElement, floatLeft: number, floatTop: number): void {
    const bodyClientRect = holderElement.getBoundingClientRect();
    const elementClientRect = parentElement.getBoundingClientRect();

    const componentElement = this.componentReference.location.nativeElement as HTMLElement;
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

  public withFloatLeft(left: number): ComponentLoader<T> {
    this.floatLeft = left;
    return <ComponentLoader<T>>this;
  }

  public withFloatTop(top: number): ComponentLoader<T> {
    this.floatTop = top;
    return <ComponentLoader<T>>this;
  }

  public withRelativeParentElement(parent: HTMLElement): ComponentLoader<T> {
    this.relativeParentElement = parent;
    return <ComponentLoader<T>>this;
  }

  public withContext(context: any): ComponentLoader<T> {
    this.context = context;
    return <ComponentLoader<T>>this;
  }

  public show(component: Type<T>, parentElement: HTMLElement): T {
    if (this.componentReference) {
      this.setPosition(parentElement,
        this.relativeParentElement || this.globalRefService.window.document.documentElement, this.floatLeft, this.floatTop);
      this.isVisible = true;
      return;
    }

    // 1. Create a component reference from the component
    this.componentReference = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    Object.assign(this.componentReference.instance, this.context);

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(this.componentReference.hostView);

    // 3. Get DOM element from component
    const domElem = (this.componentReference.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    this.setPosition(parentElement, this.relativeParentElement
      || this.globalRefService.window.document.documentElement, this.floatLeft, this.floatTop);

    // 4. Append DOM element to the body
    (this.relativeParentElement || this.globalRefService.window.document.body).appendChild(domElem);

    // Trigger change detection
    this.componentReference.changeDetectorRef.markForCheck();
    this.componentReference.changeDetectorRef.detectChanges();

    this.isVisible = true;
    return this.componentReference.instance;
  }

  public hide(): T {
    if (this.componentReference) {
      this.componentReference.location.nativeElement.style.display = 'none';
      return this.componentReference.instance;
    }

    this.isVisible = false;
  }

  public toggle(component: Type<T>, parentElement: HTMLElement): T {
    return this.isVisible ? this.hide() : this.show(component, parentElement);
  }

  public dispose(): void {
    if (this.componentReference) {
      this.appRef.detachView(this.componentReference.hostView);
      this.componentReference.destroy();
    }

    this.componentReference = null;
  }
}

