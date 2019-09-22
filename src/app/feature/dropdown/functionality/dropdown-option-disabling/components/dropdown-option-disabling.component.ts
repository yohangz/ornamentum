import { Component } from '@angular/core';

import { demoSnippet, optionDisablingUsage } from './dropdown-option-disabling.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-option-disabling-component',
  templateUrl: './dropdown-option-disabling.component.html',
  styleUrls: ['./dropdown-option-disabling.component.scss']
})
export class DropdownOptionDisablingComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public optionDisablingUsage = optionDisablingUsage;
}
