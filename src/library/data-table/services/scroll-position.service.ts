import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { ScrollPoint } from '../models/scroll-point.model';

@Injectable()
export class ScrollPositionService {
  public scrollPositionStream = new Subject<ScrollPoint>();
}
