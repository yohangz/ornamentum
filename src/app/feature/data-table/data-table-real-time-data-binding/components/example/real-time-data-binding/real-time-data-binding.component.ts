import { Component, OnInit } from '@angular/core';

import { Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators';

import { GlobalRefService } from 'ornamentum';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-real-time-data-binding',
  templateUrl: './real-time-data-binding.component.html'
})
export class RealTimeDataBindingComponent implements OnInit {
  public dataSource: Observable<any>;

  constructor(private dataFetchService: DataFetchService, private globalRefService: GlobalRefService) {
  }

  public ngOnInit(): void {
    let offset = 0;
    if (this.globalRefService.isBrowser) {
      this.dataSource = timer(0, 2000)
        .pipe(
          map(() => {
            offset += 20;
            if (offset >= 100) {
              offset = 0;
            }

            return this.dataFetchService.fetchData(offset, 20);
          })
        );
    } else {
      this.dataSource = of(this.dataFetchService.fetchData(offset, 20));
    }
  }
}
