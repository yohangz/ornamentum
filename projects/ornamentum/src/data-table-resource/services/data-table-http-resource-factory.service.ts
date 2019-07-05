import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataTableHttpDataFetchService } from './data-table-http-resource.service';

import { RequestParamMapperService } from '../../resource-utility/services/request-param-mapper.service';

/**
 * Data table HTTP data fetch service factory.
 */
@Injectable()
export class DataTableHttpResourceFactoryService {
  constructor(private http: HttpClient, public requestParamMapperService: RequestParamMapperService) {
  }

  /**
   * Get new data table HTTP data fetch service instance.
   */
  public getResourceProvider<T>(): DataTableHttpDataFetchService<T> {
    return new DataTableHttpDataFetchService<T>(this.http, this.requestParamMapperService);
  }
}
