import { Injectable, NgZone } from '@angular/core';

import { DataTableResource, DataTableResourceManager } from './data-table-resource.class';

@Injectable()
export class DataTableResourceFactoryService {
  constructor(private zone: NgZone) {
  }

  public createTableResource<T>(): DataTableResource<T> {
    return new DataTableResourceManager<T>(this.zone);
  }
}
