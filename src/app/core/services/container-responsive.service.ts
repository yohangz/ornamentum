import { Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { Subject } from 'rxjs/internal/Subject';

import { ResizeArgs } from '../models';

@Injectable()
export class ContainerResponsiveService {
  public containerSize = new ReplaySubject<ResizeArgs>(1);
  public navigationToggle = new Subject<void>();
}
