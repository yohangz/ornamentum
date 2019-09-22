import { Injectable } from '@angular/core';

import { ReplaySubject, Observable, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import get from 'lodash/get';

import { DropdownQueryResult } from '../models/dropdown-query-result.model';
import { DropdownRequestParams } from '../models/dropdown-request-params.model';

/**
 * Dropdown resource service; Dropdown client side data query is handled via this service
 */
@Injectable()
export class DropdownResourceService<T> {
  private optionDataStream: ReplaySubject<T[]>;
  private dataSourceSubscription: Subscription;

  public setDataSource(dataSource: Observable<T[]>): void {
    this.dispose();

    if (this.optionDataStream && !this.optionDataStream.closed) {
      this.optionDataStream.complete();
    }

    this.optionDataStream = new ReplaySubject<T[]>(1);
    this.dataSourceSubscription = dataSource.subscribe((options: T[]) => {
      this.optionDataStream.next(options);
    });
  }

  public query(params: DropdownRequestParams): Observable<DropdownQueryResult<T>> {
    return this.optionDataStream.pipe(
      switchMap((options: T[]) => {
        let result: T[] = options.slice();

        if (params.filter && params.filter.value) {
          const value = String(params.filter.value).toLowerCase();
          result = result.filter((option: T) => {
            const key = String(get(option, params.filter.key)).toLowerCase();
            return key.includes(value);
          });
        }

        return of({
          options: result,
          count: result.length
        });
      })
    );
  }

  public dispose(): void {
    if (this.dataSourceSubscription) {
      this.dataSourceSubscription.unsubscribe();
      this.dataSourceSubscription = null;
    }

    if (this.optionDataStream && !this.optionDataStream.closed) {
      this.optionDataStream.complete();
    }
  }
}
