import { Component } from '@angular/core';

import { demoSnippet, clientSideRealTimeDataBindingUsage } from './dropdown-client-side-real-time-data-binding.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-client-side-real-time-data-binding-component',
  templateUrl: './dropdown-client-side-real-time-data-binding.component.html',
  styleUrls: ['./dropdown-client-side-real-time-data-binding.component.scss']
})
export class DropdownClientSideRealTimeDataBindingComponent {
  public FileType = FileType;

  public realTimeDataBindingUsage = clientSideRealTimeDataBindingUsage;
  public demoSnippet = demoSnippet;
}
