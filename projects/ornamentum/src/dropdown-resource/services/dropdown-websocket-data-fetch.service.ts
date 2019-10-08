import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';
import { filter, map } from 'rxjs/operators';

import { DropdownDataBindCallback } from '../../dropdown/models/dropdown-data-bind-callback.model';
import { DropdownQueryResult } from '../../dropdown/models/dropdown-query-result.model';
import { DropdownRequestParams } from '../../dropdown/models/dropdown-request-params.model';
import { DropdownSocketPayload } from '../models/dropdown-socket-payload.model';

/**
 * Dropdown websocket data fetch service.
 */
export class DropdownWebsocketDataFetchService<T> {
  private socket: WebSocketSubject<DropdownSocketPayload>;

  constructor() {}

  /**
   * Initialize websocket connection.
   * @param config Websocket configuration object reference.
   */
  public init(config?: WebSocketSubjectConfig<DropdownSocketPayload>): void {
    this.socket = webSocket(config);
  }

  /**
   * Get socket stream reference.
   */
  public get socketStream(): WebSocketSubject<DropdownSocketPayload> {
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

    return (params?: DropdownRequestParams): Observable<DropdownQueryResult<T>> => {
      if (params) {
        const dataStream = this.socket.pipe(
          filter((event: DropdownSocketPayload) => {
            return event.type === 'data';
          }),
          map((result: DropdownSocketPayload) => {
            return result.payload as DropdownQueryResult<T>;
          })
        );


        this.socket.next({
          type: 'data-fetch',
          payload: {
            ...params
          }
        } as any);

        if (mapper) {
          return mapper(dataStream);
        }

        return dataStream;
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
  }
}
