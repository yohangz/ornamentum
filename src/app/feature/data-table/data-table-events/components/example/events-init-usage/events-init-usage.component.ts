import { Component } from '@angular/core';

import {
  DataTableComponent,
} from 'ornamentum';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-events-init-usage',
  templateUrl: './events-init-usage.component.html',
  styleUrls: ['../../data-table-events.component.scss']
})
export class EventsInitUsageComponent {
  public items: ExampleData[];

  public dataTableInitData: string = null;

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }

  public onDataTableInit(dataTable: DataTableComponent): void {
    this.dataTableInitData = 'Data table init event is called';
  }
}
