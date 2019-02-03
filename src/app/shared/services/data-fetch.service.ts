import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ExampleData } from '../models';

import fetchData from '../data/sample-data';

/**
 * Class representing data table & dropdown data fetch service.
 */
@Injectable()
export class DataFetchService {
  constructor(private http: HttpClient) {}

  /**
   * Fetch data from client source for demo client side data binding with items property.
   * @param offset Data fetch offset.
   * @param limit Data limit to fetch.
   */
  public fetchStaticData(offset: number = 0, limit: number = 10): ExampleData[] {
    return fetchData.slice(offset, offset + limit);
  }
}
