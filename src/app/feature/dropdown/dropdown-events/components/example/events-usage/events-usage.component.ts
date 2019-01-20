import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';

import { DropdownComponent } from 'ornamentum';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-events-usage',
  templateUrl: './events-usage.component.html',
  styleUrls: ['../../dropdown-events.component.scss']
})
export class EventsUsageComponent implements AfterViewInit {
  public items: ExampleData[];
  public allEventsData: string[] = [];

  constructor(private dataFetchService: DataFetchService, private cdRef: ChangeDetectorRef) {
    this.items = this.dataFetchService.fetchStaticData();
  }

  public ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  public onDataBound(): void {
    this.allEventsData.push('Data bound event is called');
  }

  public onDropdownInit(dropdown: DropdownComponent): void {
    this.allEventsData.push('Dropdown init event is called');
  }

  public onSelectChange(selectedData: ExampleData | ExampleData[]): void {
    // if selectTrackBy property is specified, the selected item id or ids will be passed as a parameter to this method.
    this.allEventsData.push(JSON.stringify(selectedData));
  }

  public getAllEventsData(): string[] {
    return this.allEventsData.slice().reverse();
  }
}
