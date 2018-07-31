import { Injectable } from '@angular/core';

import { ExampleDataModel } from '../models';

import * as data from '../data/sample-data.json';

/**
 * Class representing data table data fetch service.
 * @class TableDataFetchService.
 */
@Injectable()
export class TableDataFetchService {
  constructor() {
  }

  public getTableData(): ExampleDataModel[] {
    return [...<any>data];
  }
}
