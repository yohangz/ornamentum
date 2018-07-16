import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class NavigationService {
  public navigationToggle = new Subject<void>();
}
