import { Component, OnInit } from '@angular/core';

import { GlobalRefService } from 'ornamentum';

import { webSocket } from 'rxjs/webSocket';
import { Observable, of } from 'rxjs';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-server-side-real-time-data-binding',
  templateUrl: './server-side-real-time-data-binding.component.html'
})
export class ServerSideRealTimeDataBindingComponent implements OnInit {
  public dataSource: Observable<ExampleData[]>;

  constructor(private dataFetchService: DataFetchService, private globalRefService: GlobalRefService) {
  }

  public ngOnInit(): void {
    // This is an internal service used to check the execution environment.
    // Checks whether it is browser or not.
    if (this.globalRefService.isBrowser) {
      this.dataSource = webSocket(`wss://${window.location.hostname}`);
    } else {
      this.dataSource = of(this.dataFetchService.fetchStaticData(0, 20));
    }
  }
}
