import { Component } from '@angular/core';

import { DropdownComponent } from 'ornamentum';

import { data } from './events-usage.data';

@Component({
  selector: 'app-events-usage',
  templateUrl: './events-usage.component.html'
})
export class EventsUsageComponent {
  public items: any[];

  constructor() {
    this.items = data;
  }

  public onDropdownInit(dropdown: DropdownComponent): void {
    // goes your implementation
  }

  public onSelectChange(selectedData: any | any[]): void {
    // if selectTrackBy property is specified, the selected item id or ids will be passed as a parameter to this method.
    // goes your implementation
  }

  public onDataBound(): void {
    // goes your implementation
  }
}
