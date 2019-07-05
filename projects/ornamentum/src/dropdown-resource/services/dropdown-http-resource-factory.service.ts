import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DropdownHttpDataFetchService } from './dropdown-http-data-fetch.service';
import { RequestParamMapperService } from '../../resource-utility/services/request-param-mapper.service';

/**
 * Dropdown HTTP data fetch service factory.
 */
@Injectable()
export class DropdownHttpResourceFactoryService {
  constructor(private http: HttpClient, public requestParamMapperService: RequestParamMapperService) {
  }

  /**
   * Get new dropdown HTTP data fetch service instance.
   */
  public getResourceProvider<T>(): DropdownHttpDataFetchService<T> {
    return new DropdownHttpDataFetchService<T>(this.http, this.requestParamMapperService);
  }
}
