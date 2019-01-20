import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, PlatformLocation } from '@angular/common';

/**
 * A service that scrolls document elements into view
 */
@Injectable()
export class ScrollService {
  constructor(private location: PlatformLocation, @Inject(PLATFORM_ID) private platformId: Object) {}

  public scroll(parent: Element): void {
    if (isPlatformBrowser(this.platformId)) {
      const hash = this.getCurrentHash();
      if (hash) {
        const element = window.document.getElementById(hash);
        this.scrollToElement(parent, element);
      }
    }
  }

  public scrollToHash(parent: Element, hash: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = window.document.getElementById(hash);
      this.scrollToElement(parent, element);
    }
  }

  private scrollToElement(parent: Element, target?: Element): void {
    if (target) {
      requestAnimationFrame(() => {
        target.scrollIntoView();
        parent.scrollBy(0, target.clientTop);
      });
    }
  }

  private getCurrentHash(): string {
    return decodeURIComponent(this.location.hash.replace(/^#/, ''));
  }
}
