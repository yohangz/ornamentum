import { Injectable } from '@angular/core';

import { DataTableExampleDataModel, DropdownExampleDataModel } from '../models';

import fetchData from '../data/data-table-sample-data';
import dropDownData from '../data/dropdown-sample-data';

/**
 * Class representing data table & dropdown data fetch service.
 * @class DataFetchService.
 */
@Injectable()
export class DataFetchService {
  constructor() {
  }

  public fetchData(offset: number = 0, limit: number = 10): DataTableExampleDataModel[] {
    return fetchData.slice(0, offset + limit);
  }

  public get dropDownData(): DropdownExampleDataModel[] {
    return dropDownData;
  }
}
