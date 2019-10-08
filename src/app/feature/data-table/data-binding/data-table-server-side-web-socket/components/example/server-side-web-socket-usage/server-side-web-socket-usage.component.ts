import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Subscription } from 'rxjs';

import {
  GlobalRefService,
  DataTableWebsocketDataFetchService,
  DataTableDataBindCallback,
  DataTableWebsocketResourceFactoryService,
  DataTableFilterValueExtractCallback,
  DataTableFilterOption
} from 'ornamentum';

import { ExampleData } from 'helper-models';

/**
 * Server side web socket data binding example component.
 */
@Component({
  selector: 'app-server-side-web-socket-usage',
  templateUrl: './server-side-web-socket-usage.component.html'
})
export class ServerSideWebSocketUsageComponent implements OnInit, OnDestroy {
  public onDataBind: DataTableDataBindCallback<ExampleData>;
  public onFilterValueExtract: DataTableFilterValueExtractCallback<DataTableFilterOption>;
  public intervalSubscription: Subscription;

  private webSocketProvider: DataTableWebsocketDataFetchService;

  constructor(private globalRefService: GlobalRefService,
              private resourceFactory: DataTableWebsocketResourceFactoryService) {
    this.webSocketProvider = resourceFactory.getResourceProvider();
  }

  /**
   * Component initialize lifecycle event handler.
   */
  public ngOnInit(): void {
    // Create web socket connection on browser environment only to support server side rendering.
    if (this.globalRefService.isBrowser) {
      this.webSocketProvider.init({
        // use this for local testing `ws://${window.location.hostname}:${window.location.port}`
        url: `wss://${window.location.hostname}` // web socket endpoint
      });

      this.onDataBind = this.webSocketProvider.onDataBind<ExampleData>();
      this.onFilterValueExtract = this.webSocketProvider.onFilterValueExtract();

      // Keep the socket connection alive with a heart beat ping
      this.intervalSubscription = interval(40000).subscribe(() => {
        this.webSocketProvider.socketStream.next({
          type: 'keep-alive'
        } as any);
      });
    }
  }

  /**
   * Component destroy lifecycle event handler.
   */
  public ngOnDestroy(): void {
    this.webSocketProvider.dispose();

    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }
}
