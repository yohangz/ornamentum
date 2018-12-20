import { Component } from '@angular/core';

import { basicUsage, demoSnippet } from './dropdown-overview.list';

@Component({
  selector: 'app-dropdown-overview-component',
  templateUrl: './dropdown-overview.component.html',
  styleUrls: ['./dropdown-overview.component.scss']
})
export class DropdownOverviewComponent {
  public basicUsage = basicUsage;
  public demoSnippet = demoSnippet;
}
