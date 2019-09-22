import { Component } from '@angular/core';

import { demoSnippet, dataLimitUsage } from './dropdown-data-limit.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-data-limit-component',
  templateUrl: './dropdown-data-limit.component.html',
  styleUrls: ['./dropdown-data-limit.component.scss']
})
export class DropdownDataLimitComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public dataLimitUsage = dataLimitUsage;
}
