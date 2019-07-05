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

  private exampleResourceProvider: DropdownWebsocketDataFetchService<ExampleData>;

  constructor(private globalRefService: GlobalRefService,
              private resourceFactory: DropdownWebsocketResourceFactoryService) {
    this.exampleResourceProvider = resourceFactory.getResourceProvider<ExampleData>();
  }

  /**
   * Component initialize lifecycle event handler.
   */
  public ngOnInit(): void {
    // Create web-socket connection on browser environment only to support server side rendering.
    if (this.globalRefService.isBrowser) {
      this.exampleResourceProvider.init({
        url: `wss://${window.location.hostname}` // web-socket endpoint
      });

      this.onDataBind = this.exampleResourceProvider.onDataBind();

      // Keep the socket connection alive with a hart beat ping
      this.intervalSubscription = interval(40000).subscribe(() => {
        this.exampleResourceProvider.socketStream.next({
          type: 'keep-alive'
        } as any);
      });
    }
  }

  /**
   * Component destroy lifecycle event handler.
   */
  public ngOnDestroy(): void {
    this.exampleResourceProvider.dispose();

    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }
}
