import { Component } from '@angular/core';

import { demoSnippet, realTimeDataBindingUsage } from './dropdown-real-time-data-binding.list';

@Component({
  selector: 'app-dropdown-real-time-data-binding-component',
  templateUrl: './dropdown-real-time-data-binding.component.html',
  styleUrls: ['./dropdown-real-time-data-binding.component.scss']
})
export class DropdownRealTimeDataBindingComponent {
  public realTimeDataBindingUsage = realTimeDataBindingUsage;
  public demoSnippet = demoSnippet;
}
