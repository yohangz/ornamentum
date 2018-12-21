import { Injectable } from '@angular/core';

import { ExampleData } from '../models';

import fetchData from '../data/sample-data';

/**
 * Class representing data table & dropdown data fetch service.
 * @class DataFetchService.
 */
@Injectable()
export class DataFetchService {
  constructor() {
  }

  public fetchData(offset: number = 0, limit: number = 10): ExampleData[] {
    return fetchData.slice(offset, offset + limit);
  }
}
