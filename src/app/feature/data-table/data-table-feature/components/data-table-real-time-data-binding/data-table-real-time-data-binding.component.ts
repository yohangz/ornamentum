import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable, of } from 'rxjs/index';

import { sampleData } from '../../data/data-table-example';

@Component({
  selector: 'app-data-table-real-time-data-binding-component',
  templateUrl: './data-table-real-time-data-binding.component.html',
  styleUrls: ['./data-table-real-time-data-binding.component.scss']
})
export class DataTableRealTimeDataBindingComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public dataSource: Observable<any>;

  constructor() {
    this.dataSource = of(sampleData);

    // let a = 1;

    // setInterval(() => {
    //   this.dataSource.forEach((data: any[]) => {
    //     data[0].stationName = `station ${++a}`;
    //     data[1].stationName = `station ${++a + 1}`;
    //     data[2].stationName = `station ${++a + 3}`;
    //     data[3].stationName = `station ${++a + 5}`;
    //     data[4].stationName = `station ${++a + 7}`;
    //     data[5].stationName = `station ${++a + 9}`;
    //
    //     data[3].statusValue = `Not In Service ${++a + 1}`;
    //     data[4].statusValue = `In Service ${++a + 2}`;
    //     data[5].statusValue = `Not In Service ${++a + 3}`;
    //
    //     data[6].availableBikes = 10 + ++a;
    //     data[7].availableBikes = 20 + ++a;
    //     data[8].availableBikes = 30 + ++a;
    //
    //     data[9].stAddress1 = `Address for number ${++a + 9}`;
    //     data[10].stAddress1 = `Address for number ${++a + 10}`;
    //     data[11].stAddress1 = `Address for number ${++a + 11}`;
    //   });
    // }, 1000);
  }
}
