import { Component } from '@angular/core';

import { displayTrackedByUsage } from './dropdown-display-tracked-by.list';

@Component({
  selector: 'app-dropdown-display-tracked-by-component',
  templateUrl: './dropdown-display-tracked-by.component.html',
  styleUrls: ['./dropdown-display-tracked-by.component.scss']
})
export class DropdownDisplayTrackedByComponent {
  public displayTrackedByUsage = displayTrackedByUsage;
}
