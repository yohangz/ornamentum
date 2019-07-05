import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DropdownHttpResourceService } from './dropdown-http-resource.service';
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
  public getResourceProvider<T>(): DropdownHttpResourceService<T> {
    return new DropdownHttpResourceService<T>(this.http, this.requestParamMapperService);
  }
}
