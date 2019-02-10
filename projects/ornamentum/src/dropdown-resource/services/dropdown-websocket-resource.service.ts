import { Injectable } from '@angular/core';

import { Subscription, Subject, Observable,  } from 'rxjs';
import { map } from 'rxjs/operators';
import { webSocket, WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';

import { DropdownDataBindCallback } from '../../dropdown/models/dropdown-data-bind-callback.model';
import { DropdownQueryResult } from '../../dropdown/models/dropdown-query-result.model';
import { DropdownRequestParams } from '../../dropdown/models/dropdown-request-params.model';

/**
 * Dropdown websocket data fetch service.
 */
@Injectable()
export class DropdownWebsocketDataFetchService<T> {
  private socket: WebSocketSubject<DropdownQueryResult<T[]>>;
  private subject: Subject<DropdownQueryResult<T[]>>;
  private socketSubscription: Subscription;

  constructor() {
  }

  /**
   * Initialize websocket connection.
   * @param config Websocket configuration object reference.
   */
  public init(config?: WebSocketSubjectConfig<DropdownQueryResult<T[]>>): void {
    this.socket = webSocket<any>(config);
    this.subject = new Subject<DropdownQueryResult<T[]>>();
  }

  /**
   * Websocket data bind event handler.
   * Must call init prior to calling this function.
   * @param responseMapper Response data mapper callback.
   * @return Dropdown bind event handler.
   */
  public onDataBind(responseMapper?: <Q>(response: Q) => DropdownQueryResult<T[]>): DropdownDataBindCallback {
    if (!this.socket) {
      throw Error('Initialize socket data source before data bind.');
    }

    this.socketSubscription = this.socket.subscribe(this.subject);

    return (params?: DropdownRequestParams): Observable<DropdownQueryResult<T[]>> => {
      if (params) {
        this.socket.next(params as any);

        if (responseMapper) {
          return this.subject.pipe(map(responseMapper));
        }

        return this.subject;
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
