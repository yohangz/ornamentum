import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

@Injectable()
export class ContainerResponsiveService {
  public containerSize = new ReplaySubject<number>(1);
}
