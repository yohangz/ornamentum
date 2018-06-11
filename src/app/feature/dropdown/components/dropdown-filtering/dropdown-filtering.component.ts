import { Component } from '@angular/core';

import { filteringUsage } from './dropdown-filtering.list';

@Component({
  selector: 'app-dropdown-filtering-component',
  templateUrl: './dropdown-filtering.component.html',
  styleUrls: ['./dropdown-filtering.component.scss']
})
export class DropdownFilteringComponent {
  public filteringUsage = filteringUsage;
}
