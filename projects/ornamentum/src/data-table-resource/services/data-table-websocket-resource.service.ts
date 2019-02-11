import { Injectable } from '@angular/core';

import { Subscription, Subject, Observable,  } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { webSocket, WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';

import { DataTableRequestParams } from '../../data-table/models/data-table-request-params.model';
import { DataTableQueryResult } from '../../data-table/models/data-table-query-result.model';
import { DataTableDataBindCallback } from '../../data-table/models/data-table-data-bind-callback.model';

/**
 * Data table websocket data fetch service.
 */
@Injectable()
export class DataTableWebsocketDataFetchService<T> {
  private socket: WebSocketSubject<DataTableQueryResult<T[]>>;
  private subject: Subject<DataTableQueryResult<T[]>>;
  private socketSubscription: Subscription;

  constructor() {
  }

  /**
   * Initialize websocket connection.
   * @param config Socket configuration parameters.
   */
  public init(config?: WebSocketSubjectConfig<DataTableQueryResult<T[]>>): void {
    this.socket = webSocket<any>(config);
    this.subject = new Subject<DataTableQueryResult<T[]>>();
  }

  /**
   * Websocket data bind event handler.
   * Must call init prior to calling this function.
   * @param responseMapper Response data mapper callback.
   * @return Data table bind event handler.
   */
  public onDataBind(responseMapper?: <Q>(response: Q) => DataTableQueryResult<T[]>): DataTableDataBindCallback {
    if (!this.socket) {
      throw Error('Initialize socket data source before data bind.');
    }

    this.socketSubscription = this.socket.subscribe(this.subject);

    return (params?: DataTableRequestParams): Observable<DataTableQueryResult<T[]>> => {
      if (params) {
        this.socket.next({
          offset: params.offset,
          limit: params.limit,
          fields: params.fields
        } as any);

        if (responseMapper) {
          return this.subject.pipe(map(responseMapper));
        }

        return this.subject.pipe(
          tap((data) => {
            console.log('data: %o', data);
          })
        );
      }
    };
  }

  /**
   * Dispose websocket connection.
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
