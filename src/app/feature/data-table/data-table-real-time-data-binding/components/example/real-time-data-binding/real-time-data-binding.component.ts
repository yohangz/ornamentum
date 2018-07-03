import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './real-time-data-binding.data';

@Component({
  selector: 'app-real-time-data-binding',
  templateUrl: './real-time-data-binding.component.html'
})
export class RealTimeDataBindingComponent {
  public dataSource: Observable<any>;

  public interval: any;

  constructor() {
    this.dataSource = of(data);
  }

  public ngOnInit(): void {
    let a = 1;

    this.interval = setInterval(() => {
      this.dataSource.subscribe((data: any[]) => {
        data[0].stationName = `station ${++a}`;
        data[1].stationName = `station ${++a + 1}`;
        data[2].stationName = `station ${++a + 3}`;
        data[3].stationName = `station ${++a + 5}`;
        data[4].stationName = `station ${++a + 7}`;
        data[5].stationName = `station ${++a + 9}`;

        data[3].statusValue = `Not In Service ${++a + 1}`;
        data[4].statusValue = `In Service ${++a + 2}`;
        data[5].statusValue = `Not In Service ${++a + 3}`;

        data[6].availableBikes = 10 + ++a;
        data[7].availableBikes = 20 + ++a;
        data[8].availableBikes = 30 + ++a;

        data[9].stAddress1 = `Address for number ${++a + 9}`;
        data[10].stAddress1 = `Address for number ${++a + 10}`;
        data[11].stAddress1 = `Address for number ${++a + 11}`;
      });
    }, 1000);
  }

  public ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
