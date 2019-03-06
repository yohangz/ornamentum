import { Component, OnInit } from '@angular/core';

import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

import { GlobalRefService } from 'ornamentum';

import { ExampleData } from 'helper-models';
import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-client-side-stream-usage',
  templateUrl: './client-side-stream-usage.component.html'
})
export class ClientSideStreamUsageComponent implements OnInit {
  public dataSource: Observable<ExampleData[]>;

  constructor(private dataFetchService: DataFetchService, private globalRefService: GlobalRefService) {
  }

  public ngOnInit(): void {
    let offset = 0;

    // This code is used to emulate the realtime data source behavior.
    // Replace this with your actual realtime data source (Observable stream).
    if (this.globalRefService.isBrowser) {

      // This code is used to emulate the realtime data source behavior.
      // Replace this with your actual realtime data source (Observable stream).
      this.dataSource = timer(0, 2000).pipe(
        map(() => {
          offset += 20;
          if (offset >= 100) {
            offset = 0;
          }

          // This line of code is fetching 20 dummy data items collection from a local data service.
          // Replace this with your own data source.
          return this.dataFetchService.fetchStaticData(offset, 20);
        })
      );
    }
  }
}
