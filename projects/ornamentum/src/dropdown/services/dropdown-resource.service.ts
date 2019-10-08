import { Injectable } from '@angular/core';

import { ReplaySubject, Observable, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { get } from '../../utility/services/object-utility.class';

import { DropdownQueryResult } from '../models/dropdown-query-result.model';
import { DropdownRequestParams } from '../models/dropdown-request-params.model';

/**
 * Dropdown resource service. Dropdown client side data query is handled via this service.
 */
@Injectable()
export class DropdownResourceService<T> {
  private optionDataStream: ReplaySubject<T[]>;
  private dataSourceSubscription: Subscription;

  /**
   * Set source data source.
   * @param dataSource Data source observable.
   */
  public setDataSource(dataSource: Observable<T[]>): void {
    this.dispose();

    this.optionDataStream = new ReplaySubject<T[]>(1);
    this.dataSourceSubscription = dataSource.subscribe(this.optionDataStream);
  }

  /**
   * Query data.
   * @param params Dropdown request parameters.
   */
  public query(params: DropdownRequestParams): Observable<DropdownQueryResult<T>> {
    return this.optionDataStream.pipe(
      switchMap((options: T[]) => {
        let result: T[] = options.slice();

        if (params.filter) {
          const filterValue = String(params.filter).toLowerCase();
          result = result.filter((option: T) => {
            const optionValue = String(get(option, params.displayTrackBy)).toLowerCase();
            return optionValue.includes(filterValue);
          });
        }

        if (params.offset !== undefined) {
          const offset = params.offset + 1 > result.length ? 0 : params.offset;

          if (params.limit === undefined) {
            result = result.slice(offset, result.length);
          } else {
            result = result.slice(offset, offset + params.limit);
          }
        }

        return of({
          options: result,
          count: options.length
        });
      })
    );
  }

  /**
   * Dispose data source.
   */
  public dispose(): void {
    if (this.dataSourceSubscription) {
      this.dataSourceSubscription.unsubscribe();
    }

    if (this.optionDataStream && !this.optionDataStream.closed) {
      this.optionDataStream.complete();
    }

    this.dataSourceSubscription = null;
    this.optionDataStream = null;
  }
}
