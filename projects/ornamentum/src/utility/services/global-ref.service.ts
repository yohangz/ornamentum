import { Injectable } from '@angular/core';

/**
 * Global reference service.
 * List all global javascript references here.
 */
@Injectable()
export class GlobalRefService {
  private _scrollbarWidth: number;

  constructor() {
    this.setScrollbarWidth();
  }

  public setScrollbarWidth(): void {
    if (this._scrollbarWidth !== undefined) {
      return;
    }

    if (this.isBrowser) {
      const outer = document.createElement('div');
      outer.style.visibility = 'hidden';
      outer.style.width = '100px';
      outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps

      document.body.appendChild(outer);

      const widthNoScroll = outer.offsetWidth;
      // force scrollbars
      outer.style.overflow = 'scroll';

      // add inner div
      const inner = document.createElement('div');
      inner.style.width = '100%';
      outer.appendChild(inner);

      const widthWithScroll = inner.offsetWidth;

      // remove divs
      outer.parentNode.removeChild(outer);

      this._scrollbarWidth = widthNoScroll - widthWithScroll;
    }
  }

  /**
   * Get scrollbar width.
   * @returns {number} Scroll bar width.
   */
  public get scrollbarWidth(): number {
    return this._scrollbarWidth;
  }
  /**
   * Get window reference.
   * @return {Window} Window reference.
   */
  public get window(): Window {
    return window;
  }

  public get isBrowser(): boolean {
    return typeof window !== 'undefined';
  }
}
