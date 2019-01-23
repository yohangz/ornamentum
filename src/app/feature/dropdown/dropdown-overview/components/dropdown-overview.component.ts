import { Component } from '@angular/core';

import { basicUsage, demoSnippet } from './dropdown-overview.list';

import { VERSION } from '../../../../../environments/version';

@Component({
  selector: 'app-dropdown-overview-component',
  templateUrl: './dropdown-overview.component.html',
  styleUrls: ['./dropdown-overview.component.scss']
})
export class DropdownOverviewComponent {
  public basicUsage = basicUsage;
  public demoSnippet = demoSnippet;
  public packageVersion = VERSION;
}
