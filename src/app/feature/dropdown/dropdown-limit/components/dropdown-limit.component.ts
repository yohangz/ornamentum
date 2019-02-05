import { Component } from '@angular/core';

import { demoSnippet, dataLimitUsage } from './dropdown-limit.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-limit-component',
  templateUrl: './dropdown-limit.component.html',
  styleUrls: ['./dropdown-limit.component.scss']
})
export class DropdownLimitComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public dataLimitUsage = dataLimitUsage;
}
