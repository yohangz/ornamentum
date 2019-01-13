import { Component } from '@angular/core';

import { DropdownComponent } from 'ornamentum';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-events-init-usage',
  templateUrl: './events-init-usage.component.html',
  styleUrls: ['../../dropdown-events.component.scss']
})
export class EventsInitUsageComponent {
  public items: ExampleData[];
  public initEventData: string = null;

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }

  public onDropdownInit(dropdown: DropdownComponent): void {
    this.initEventData = 'Dropdown init event is called';
  }
}
