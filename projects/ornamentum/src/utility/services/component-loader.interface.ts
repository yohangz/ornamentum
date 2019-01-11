import { Injector, Type } from '@angular/core';
import { ComponentLoaderOptions } from '../models/component-loader-options.model';

/**
 * Dynamic component loader; Responsible of dynamically rendering angular components
 */
export interface ComponentLoader<T> {
  /**
   * Hide component if visible
   * @return Rendered component reference
   */
  hide(): T;

  /**
   * Render component if not available, else display hidden component
   * @param component Component class type
   * @param parentElement Parent element to append the target component
   * @param injector Component injector reference
   * @param options Component loader options object
   * @return Rendered component reference
   */
  show(component: Type<T>, parentElement: HTMLElement, injector: Injector, options?: ComponentLoaderOptions): T;

  /**
   * Toggle component display state or render if not available
   * @param component Component class type
   * @param parentElement Parent element to append the target component
   * @param injector Component injector reference
   * @param options Component loader options object
   * @return Rendered component reference
   */
  toggle(component: Type<T>, parentElement: HTMLElement, injector: Injector, options?: ComponentLoaderOptions): T;

  /**
   * Dispose rendered component reference and bindings
   */
  dispose(): void;
}
