import { Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import get from 'lodash.get';

import { DropdownQueryResult } from '../models/dropdown-query-result.model';
import { DropdownRequestParams } from '../models/dropdown-request-params.model';

@Injectable()
export class DropdownResourceService<T> {
  private itemDataStream = new ReplaySubject<T[]>(1);
  private dataSourceSubscription: Subscription;

  public setDataSource(dataSource: Observable<T[]>): void {
    this.dispose();
    this.dataSourceSubscription = dataSource.subscribe((items: T[]) => {
      this.itemDataStream.next(items);
    });
  }

  public query(params: DropdownRequestParams): Observable<DropdownQueryResult<T>> {
    return this.itemDataStream.switchMap((items: T[]) => {
      let result: T[] = items.slice();

      if (params.filter && params.filter.value) {
        result = result.filter((item: T) => {
          return get(item, params.filter.key).includes(params.filter.value);
        });
      }

      return Observable.of({
        items: result,
        count: result.length
      });
    });
  }

  public dispose(): void {
    if (this.dataSourceSubscription) {
      this.dataSourceSubscription.unsubscribe();
      this.dataSourceSubscription = null;
    }
  }
}
