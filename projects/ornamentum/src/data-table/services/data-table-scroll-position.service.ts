import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { DataTableScrollPoint } from '../models/data-table-scroll-point.model';

/**
 * Scroll position stream service; Manage common scroll position observable.
 */
@Injectable()
export class DataTableScrollPositionService {
  public scrollPositionStream = new Subject<DataTableScrollPoint>();
}
