import { Component } from '@angular/core';

import { demoSnippet, clientSideRealTimeDataBindingUsage } from './dropdown-server-side-real-time-data-binding.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-server-side-real-time-data-binding-component',
  templateUrl: './dropdown-server-side-real-time-data-binding.component.html',
  styleUrls: ['./dropdown-server-side-real-time-data-binding.component.scss']
})
export class DropdownServerSideRealTimeDataBindingComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public realTimeDataBindingUsage = clientSideRealTimeDataBindingUsage;
}
