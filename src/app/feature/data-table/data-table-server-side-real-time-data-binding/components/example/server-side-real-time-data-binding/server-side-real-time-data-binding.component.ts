import { Component, OnInit } from '@angular/core';

import { GlobalRefService } from 'ornamentum';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-server-side-real-time-data-binding',
  templateUrl: './server-side-real-time-data-binding.component.html'
})
export class ServerSideRealTimeDataBindingComponent implements OnInit {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService, private globalRefService: GlobalRefService) {
  }

  public ngOnInit(): void {
    // This is an internal service used to check the execution environment.
    // Checks whether it is browser or not.
    if (this.globalRefService.isBrowser) {

      // Use native WebSocket available in the browser
      const ws = new WebSocket(`ws://${window.location.hostname}:40510`);

      // Event emitted when connected
      ws.onopen = () => {
        console.log('websocket is connected ...');

        // Sending a send event to websocket server
        ws.send('connected');
      };

      // Event emitted when receiving message from the websocket server
      ws.onmessage = (ev: MessageEvent) => {
        this.items = [...JSON.parse(ev.data)];
      };

    } else {
      this.items = this.dataFetchService.fetchStaticData(0, 20);
    }
  }
}
