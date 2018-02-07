import { Injectable, NgZone } from '@angular/core';

import { DataTableResource} from './data-table-resource.class';
import { DataTableResourceManager } from './data-table-resource-manager.class';

@Injectable()
export class DataTableResourceFactoryService {
  constructor(private zone: NgZone) {
  }

  public createTableResource<T>(): DataTableResource<T> {
    return new DataTableResourceManager<T>(this.zone);
  }
}
