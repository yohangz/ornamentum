import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable } from 'rxjs';

import { sampleData } from '../../data/data-table-example';

@Component({
  selector: 'app-data-table-events-component',
  templateUrl: './data-table-events.component.html',
  styleUrls: ['./data-table-events.component.scss']
})
export class DataTableEventsComponent {
  public DataTableSelectMode = DataTableSelectMode;

  // public items: Observable<any>;

  constructor() {
    // this.items = Observable.of(sampleData);
  }
}
