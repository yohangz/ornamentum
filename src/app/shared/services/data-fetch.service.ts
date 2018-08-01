import { Injectable } from '@angular/core';

import { DataTableExampleDataModel, DropdownExampleDataModel } from '../models';

import * as tableData from '../data/data-table-sample-data.json';
import * as dropDownData from '../data/dropdown-sample-data.json';

/**
 * Class representing data table & dropdown data fetch service.
 * @class DataFetchService.
 */
@Injectable()
export class DataFetchService {
  constructor() {
  }

  public getTableData(): DataTableExampleDataModel[] {
    return [...<any>tableData];
  }

  public getDropDownData(): DropdownExampleDataModel[] {
    return [...<any>dropDownData];
  }
}
