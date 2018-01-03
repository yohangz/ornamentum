import { Injectable } from '@angular/core';

/**
 * Global reference service.
 * List all global javascript references here.
 */
@Injectable()
export class GlobalRefService {
  /**
   * Get window reference.
   * @return {Window} Window reference.
   */
  public get window(): Window {
    return window;
  }

  /**
   * Get console reference.
   * @return {Console} Console reference.
   */
  public get console(): Console {
    return console;
  }
}
