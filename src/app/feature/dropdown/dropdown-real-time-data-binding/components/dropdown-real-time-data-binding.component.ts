import { Component } from '@angular/core';

import { demoSnippet, realTimeDataBindingUsage } from './dropdown-real-time-data-binding.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-real-time-data-binding-component',
  templateUrl: './dropdown-real-time-data-binding.component.html',
  styleUrls: ['./dropdown-real-time-data-binding.component.scss']
})
export class DropdownRealTimeDataBindingComponent {
  public FileType = FileType;

  public realTimeDataBindingUsage = realTimeDataBindingUsage;
  public demoSnippet = demoSnippet;
}
