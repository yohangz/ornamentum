import { Subscription, Subject, Observable } from 'rxjs';
import { webSocket, WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';

import { DropdownDataBindCallback } from '../../dropdown/models/dropdown-data-bind-callback.model';
import { DropdownQueryResult } from '../../dropdown/models/dropdown-query-result.model';
import { DropdownRequestParams } from '../../dropdown/models/dropdown-request-params.model';

/**
 * Dropdown websocket data fetch service.
 */
export class DropdownWebsocketDataFetchService<T> {
  private socket: WebSocketSubject<DropdownQueryResult<T>>;
  private subject: Subject<DropdownQueryResult<T>>;
  private socketSubscription: Subscription;

  constructor() {}

  /**
   * Initialize websocket connection.
   * @param config Websocket configuration object reference.
   */
  public init(config?: WebSocketSubjectConfig<DropdownQueryResult<T>>): void {
    this.socket = webSocket<any>(config);
    this.subject = new Subject<DropdownQueryResult<T>>();
  }

  /**
   * Get socket stream reference.
   */
  public get socketStream(): WebSocketSubject<DropdownQueryResult<T>> {
    return this.socket;
  }

  /**
   * Websocket data bind event handler.
   * Must call init prior to calling this function.
   * @param mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
   * @return Dropdown bind event handler.
   */
  public onDataBind(mapper?: <Q>(response: Observable<Q>) => Observable<DropdownQueryResult<T>>): DropdownDataBindCallback<T> {
    if (!this.socket) {
      throw Error('Initialize socket data source before data bind.');
    }

    this.socketSubscription = this.socket.subscribe(this.subject);

    return (params?: DropdownRequestParams): Observable<DropdownQueryResult<T>> => {
      if (params) {
        this.socket.next({
          type: 'data-fetch',
          filter: params.filter,
          offset: params.offset,
          limit: params.limit
        } as any);

        if (mapper) {
          return mapper(this.subject);
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
