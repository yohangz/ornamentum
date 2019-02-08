import { Component } from '@angular/core';

import { demoSnippet, advancedUsage } from './dropdown-basic-usage.list';

import { FileType } from 'helper-models';

import { VERSION } from '../../../../../../environments/version';

@Component({
  selector: 'app-dropdown-basic-usage-component',
  templateUrl: './dropdown-basic-usage.component.html',
  styleUrls: ['./dropdown-basic-usage.component.scss']
})
export class DropdownBasicUsageComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public advancedUsage = advancedUsage;

  public packageVersion = VERSION;
}
