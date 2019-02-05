import { Component, OnInit } from '@angular/core';

import { Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators';

import { GlobalRefService } from 'ornamentum';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-client-side-real-time-data-binding-usage',
  templateUrl: './client-side-real-time-data-binding-usage.component.html'
})
export class ClientSideRealTimeDataBindingUsageComponent implements OnInit {
  public dataSource: Observable<ExampleData[]>;

  constructor(private dataFetchService: DataFetchService, private globalRefService: GlobalRefService) {}

  public ngOnInit(): void {
    let offset = 0;

    // This is an internal service used to check the execution environment.
    // Checks whether it is browser or not.
    if (this.globalRefService.isBrowser) {

      // Code segment used to emulate the realtime data binding.
      this.dataSource = timer(0, 2000).pipe(
        map(() => {
          offset += 20;
          if (offset >= 100) {
            offset = 0;
          }

          // Bind data in the client-side.
          return this.dataFetchService.fetchStaticData(offset, 20);
        })
      );
    } else {
      // Bind data in the server-side.
      this.dataSource = of(this.dataFetchService.fetchStaticData(offset, 20));
    }
  }
}
