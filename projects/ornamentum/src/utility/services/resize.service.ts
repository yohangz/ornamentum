import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { fromEvent, Subject } from 'rxjs/index';

import { GlobalRefService } from './global-ref.service';

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
