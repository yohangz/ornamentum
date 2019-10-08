import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';
import { filter, map, take } from 'rxjs/operators';

import { DataTableRequestParams } from '../../data-table/models/data-table-request-params.model';
import { DataTableQueryResult } from '../../data-table/models/data-table-query-result.model';
import { DataTableDataBindCallback } from '../../data-table/models/data-table-data-bind-callback.model';
import { DataTablesSocketPayload } from '../models/data-table-socket-payload.model';
import { DataTableFilterValueExtractCallback } from '../../data-table/models/data-table-filter-value-extract-callback.model';
import { DataTableSocketFilterOptions } from '../models/data-table-socket-filter-options.model';
import { DropdownQueryResult } from '../../dropdown/models/dropdown-query-result.model';
import { DataTableFilterParams } from '../../data-table/models/data-table-filter-params.model';

/**
 * Data table web socket data fetch service.
 */
export class DataTableWebsocketDataFetchService {
  private socket: WebSocketSubject<DataTablesSocketPayload>;

  constructor() {}

  /**
   * Initialize web socket connection.
   * @param config Socket configuration parameters.
   */
  public init(config?: WebSocketSubjectConfig<DataTablesSocketPayload>): void {
    this.socket = webSocket(config);
  }

  /**
   * Get source socket stream reference.
   */
  public get socketStream(): WebSocketSubject<DataTablesSocketPayload> {
    return this.socket;
  }

  /**
   * Web socket data bind event handler.
   * Must call init prior to calling this function.
   * @param mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
   * @return Data table bind event handler.
   */
  public onDataBind<T>(mapper?: <Q>(source: Observable<Q>) => Observable<DataTableQueryResult<T>>): DataTableDataBindCallback<T> {
    if (!this.socket) {
      throw Error('Initialize socket data source before data bind.');
    }

    return (params: DataTableRequestParams): Observable<DataTableQueryResult<T>> => {
      const dataStream = this.socket.pipe(
        filter((event: DataTablesSocketPayload) => {
          return event.type === 'data';
        }),
        map((result: DataTablesSocketPayload) => {
          return result.payload as DataTableQueryResult<T>;
        })
      );

      this.socket.next({
        type: 'data-query',
        payload: {
          ...params
        }
      });

      if (mapper) {
        return mapper(dataStream);
      }

      return dataStream;
    };
  }

  /**
   * Filter value extract event handler.
   *  Must call init prior to calling this function.
   * @param mapper Response data mapper callback. map source stream format to data table filter options
   * expected stream or apply additional formatting.
   */
  public onFilterValueExtract<R>(mapper?: <Q>(response: Observable<Q>) => Observable<DropdownQueryResult<R>>)
    : DataTableFilterValueExtractCallback<R> {
    if (!this.socket) {
      throw Error('Initialize socket data source before data bind.');
    }

    const sourceStream = this.socket.pipe(
      filter((event: DataTablesSocketPayload) => {
        return event.type === 'filter-options';
      }),
      map((result: DataTablesSocketPayload) => {
        return result.payload;
      })
    );

    return (params: DataTableFilterParams): Observable<DropdownQueryResult<R>> => {
      const timestamp = Date.now();

      const filteredStream = sourceStream.pipe(
        filter((filterData: DataTableSocketFilterOptions) => {
          return filterData.id === timestamp;
        }),
        take(1),
        map((filterData: DataTableSocketFilterOptions) => {
          return filterData.data;
        })
      );

      this.socket.next({
        type: 'filter-options-query',
        payload: {
          id: timestamp,
          field: params.selectTrackBy,
          offset: params.offset,
          limit: params.limit,
          filter: params.filter
        }
      });

      if (mapper) {
        return mapper(filteredStream);
      }

      return filteredStream;
    };
  }

  /**
   * Dispose web socket connection.
   */
  public dispose(): void {
    if (this.socket) {
      this.socket.complete();
    }
  }
}
