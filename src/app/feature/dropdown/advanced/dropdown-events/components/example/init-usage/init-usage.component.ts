import { Component } from '@angular/core';

import { DropdownComponent } from 'ornamentum';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

@Component({
  selector: 'app-init-usage',
  templateUrl: './init-usage.component.html',
  styleUrls: ['../../dropdown-events.component.scss']
})
export class InitUsageComponent {
  public options: ExampleData[];
  public initEventData: string = null;

  constructor(private dataFetchService: DataFetchService) {
    this.options = this.dataFetchService.fetchStaticData();
  }

  public onDropdownInit(dropdown: DropdownComponent): void {
    this.initEventData = 'Dropdown init event is called';
  }
}
