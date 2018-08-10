import { ViewPosition } from './view-position.model';

export interface ComponentLoaderOptions {
  floatLeft?: number;
  floatTop?: number;
  relativeParent?: HTMLElement;
  closeOnOutsideClick?: boolean;
  context?: any;
  position?: ViewPosition;
}
