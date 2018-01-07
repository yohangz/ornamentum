import { Injectable } from '@angular/core';

import { DataTableResource, DataTableResourceManager } from './data-table-resource.class';

@Injectable()
export class DataTableResourceFactoryService {
  constructor() {
  }

  public createTableResource<T>(): DataTableResource<T> {
    return new DataTableResourceManager<T>();
  }
}
