import { Component } from '@angular/core';

import { DataTableColumnComponent } from '../../../../../../../../projects/ornamentum/src';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-events-column-bind-usage',
  templateUrl: './events-column-bind-usage.component.html',
  styleUrls: ['../../data-table-events.component.scss']
})
export class EventsColumnBindUsageComponent {
  public items: ExampleData[];

  public columnBindEventData: string[] = [];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData();
  }

  public onColumnBind(dataTableColumnComponent: DataTableColumnComponent): void {
    this.columnBindEventData.push(`Column bind event is called for column - ${dataTableColumnComponent.title}`);
  }
}
