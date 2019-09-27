import { Injectable } from '@angular/core';

import { fromEvent, Subject, Observable } from 'rxjs';

import { GlobalRefService } from './global-ref.service';

/**
 * Resize handler service; Window resize global event handler.
 */
@Injectable()
export class ResizeService {
  public resize: Observable<Event>;

  constructor(private globalRefService: GlobalRefService) {
    if (this.globalRefService.isBrowser) {
      this.resize = fromEvent(this.globalRefService.window, 'resize');
    } else {
      this.resize = new Subject();
    }
  }
}
