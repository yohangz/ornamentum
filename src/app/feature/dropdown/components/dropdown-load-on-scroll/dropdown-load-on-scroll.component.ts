import { Component } from '@angular/core';

import { loadOnScrollUsage } from './dropdown-load-on-scroll.list';

@Component({
  selector: 'app-dropdown-load-on-scroll-component',
  templateUrl: './dropdown-load-on-scroll.component.html',
  styleUrls: ['./dropdown-load-on-scroll.component.scss']
})
export class DropdownLoadOnScrollComponent {
  public loadOnScrollUsage = loadOnScrollUsage;
}
