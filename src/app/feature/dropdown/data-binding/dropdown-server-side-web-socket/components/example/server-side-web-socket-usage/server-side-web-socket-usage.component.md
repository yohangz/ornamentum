import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import {
  DropdownWebsocketResourceFactoryService,
  DropdownDataBindCallback
} from 'ornamentum';

import { ExampleData } from 'helper-models';

@Component({
  selector: 'app-server-side-web-socket-usage',
  templateUrl: './server-side-web-socket-usage.component.html'
})
export class ServerSideWebSocketUsageComponent implements OnInit, OnDestroy {
  public onDataBind: DropdownDataBindCallback<ExampleData>;

  private webSocketProvider: DropdownWebsocketDataFetchService<ExampleData>;

  constructor(private resourceFactory: DropdownWebsocketResourceFactoryService) {
    this.webSocketProvider = resourceFactory.getResourceProvider<ExampleData>();
  }

  /**
   * Component initialize lifecycle event handler.
   */
  public ngOnInit(): void {
    // Create web socket connection to support server side rendering.
    this.webSocketProvider.init({
      url: `wss://ornamentum.app` // web socket endpoint
    });

    this.onDataBind = this.webSocketProvider.onDataBind();
  }

  /**
   * Component destroy lifecycle event handler.
   */
  public ngOnDestroy(): void {
    this.webSocketProvider.dispose();
  }
}
