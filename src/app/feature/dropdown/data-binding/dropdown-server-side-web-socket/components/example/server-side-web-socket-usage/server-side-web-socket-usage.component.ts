import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Subscription } from 'rxjs';

import {
  GlobalRefService,
  DropdownWebsocketResourceFactoryService,
  DropdownDataBindCallback,
  DropdownWebsocketDataFetchService
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
  public onDataBind: DropdownDataBindCallback<ExampleData>;
  public intervalSubscription: Subscription;

  private webSocketProvider: DropdownWebsocketDataFetchService<ExampleData>;

  constructor(private globalRefService: GlobalRefService,
              private resourceFactory: DropdownWebsocketResourceFactoryService) {
    this.webSocketProvider = resourceFactory.getResourceProvider<ExampleData>();
  }

  /**
   * Component initialize lifecycle event handler.
   */
  public ngOnInit(): void {
    // Create web-socket connection on browser environment only to support server side rendering.
    if (this.globalRefService.isBrowser) {
      this.webSocketProvider.init({
        // use this for local testing `ws://${window.location.hostname}:${window.location.port}`
        url: `wss://${window.location.hostname}` // web-socket endpoint
      });

      this.onDataBind = this.webSocketProvider.onDataBind();

      // Keep the socket connection alive with a hart beat ping
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
