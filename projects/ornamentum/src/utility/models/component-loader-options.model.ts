import { ViewPosition } from './view-position.model';

/**
 * Component loader options model
 */
export interface ComponentLoaderOptions {
  floatLeft?: number;
  floatTop?: number;
  relativeParentElement?: HTMLElement;
  closeOnOutsideClick?: boolean;
  context?: any;
  position?: ViewPosition;
}
