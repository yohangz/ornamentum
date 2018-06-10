import { Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

import { ResizeArgs } from '../models';

@Injectable()
export class ContainerResponsiveService {
  public containerSize = new ReplaySubject<ResizeArgs>(1);
}
