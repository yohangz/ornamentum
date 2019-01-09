import { Component } from '@angular/core';

import { loadOnInitUsage, demoSnippet } from './dropdown-load-on-init.list';

@Component({
  selector: 'app-dropdown-load-on-init-component',
  templateUrl: './dropdown-load-on-init.component.html',
  styleUrls: ['./dropdown-load-on-init.component.scss']
})
export class DropdownLoadOnInitComponent {
  public loadOnInitUsage = loadOnInitUsage;
  public demoSnippet = demoSnippet;
}
