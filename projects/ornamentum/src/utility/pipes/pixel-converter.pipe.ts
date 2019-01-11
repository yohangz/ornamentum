import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pixel converter pipe; Append 'px' if value is number type, else return the same.
 */
@Pipe({
  name: 'ngPx'
})
export class PixelConverterPipe implements PipeTransform {

  /**
   * Pipe transform implementation.
   * @param value Source value.
   * @returns Converted pixel value.
   */
  public transform(value: string | number): string {
    if (value === undefined) {
      return;
    }
    if (typeof value === 'string') {
      return value;
    }
    if (typeof value === 'number') {
      return `${value}px`;
    }
  }
}
