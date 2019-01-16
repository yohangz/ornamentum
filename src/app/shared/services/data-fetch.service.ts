import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ExampleData } from '../models';
import { ResourceData } from '../models/resource-data.model';

import fetchData from '../data/sample-data';

/**
 * Class representing data table & dropdown data fetch service.
 */
@Injectable()
export class DataFetchService {
  constructor(private http: HttpClient) {
  }

  /**
   * Fetch data from client source for demo client side data binding.
   * @param offset Data fetch offset.
   * @param limit Data limit to fetch.
   */
  public fetchData(offset: number = 0, limit: number = 10): ExampleData[] {
    return fetchData.slice(offset, offset + limit);
  }

  /**
   * Fetch data from server for server side data binding.
   * @param offset Data fetch offset.
   * @param limit Data limit to fetch.
   */
  public fetchDataFromServer(offset: number = 0, limit: number = 10): Observable<ResourceData<ExampleData[]>> {
    let params = new HttpParams();
    params = params.set('offset', String(offset)).set('limit', String(offset + limit));
    return this.http.get<ResourceData<ExampleData[]>>('/api/data', { params: params });
  }
}
