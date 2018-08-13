import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { fromEvent } from 'rxjs/index';

import { GlobalRefService } from './global-ref.service';

@Injectable()
export class ResizeService {
  public resize: Observable<Event>;

  constructor(private globalRefService: GlobalRefService) {
    this.resize = fromEvent(this.globalRefService.window, 'resize');
  }
}
