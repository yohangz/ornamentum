import { Injectable } from '@angular/core';

import { Subscription, Subject, Observable } from 'rxjs';
import { webSocket, WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';

import { DataTableRequestParams } from '../../data-table/models/data-table-request-params.model';
import { DataTableQueryResult } from '../../data-table/models/data-table-query-result.model';
import { DataTableDataBindCallback } from '../../data-table/models/data-table-data-bind-callback.model';

/**
 * Data table web socket data fetch service.
 */
@Injectable()
export class DataTableWebsocketDataFetchService<T> {
  private socket: WebSocketSubject<DataTableQueryResult<T[]>>;
  private subject: Subject<DataTableQueryResult<T[]>>;
  private socketSubscription: Subscription;

  constructor() {}

  /**
   * Initialize web socket connection.
   * @param config Socket configuration parameters.
   */
  public init(config?: WebSocketSubjectConfig<DataTableQueryResult<T[]>>): void {
    this.socket = webSocket<any>(config);
    this.subject = new Subject<DataTableQueryResult<T[]>>();
  }

  /**
   * Get socket stream reference.
   */
  public get socketStream(): WebSocketSubject<DataTableQueryResult<T[]>> {
    return this.socket;
  }

  /**
   * Web socket data bind event handler.
   * Must call init prior to calling this function.
   * @param mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
   * @return Data table bind event handler.
   */
  public onDataBind(mapper?: <Q>(source: Observable<Q>) => Observable<DataTableQueryResult<T[]>>): DataTableDataBindCallback {
    if (!this.socket) {
      throw Error('Initialize socket data source before data bind.');
    }

    this.socketSubscription = this.socket.subscribe(this.subject);

    return (params?: DataTableRequestParams): Observable<DataTableQueryResult<T[]>> => {
      if (params) {
        this.socket.next({
          type: 'data-fetch',
          offset: params.offset,
          limit: params.limit,
          fields: params.fields
        } as any);

        if (mapper) {
          return mapper(this.subject);
        }

        return this.subject;
      }
    };
  }

  /**
   * Dispose web socket connection.
   */
  public dispose(): void {
    if (this.socket) {
      this.socket.complete();
    }

    if (this.socketSubscription) {
      this.socketSubscription.unsubscribe();
    }

    if (this.subject) {
      this.subject.unsubscribe();
    }
  }
}
