import { Component } from '@angular/core';

import { displayItemsUsage, demoSnippet } from './dropdown-display-items.list';

@Component({
  selector: 'app-dropdown-display-items-component',
  templateUrl: './dropdown-display-items.component.html',
  styleUrls: ['./dropdown-display-items.component.scss']
})
export class DropdownDisplayItemsComponent {
  public displayTrackedByUsage = displayItemsUsage;
  public demoSnippet = demoSnippet;
}
