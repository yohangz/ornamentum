import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable()
export class NavigationService {
  public navigationToggle = new Subject<void>();
}
