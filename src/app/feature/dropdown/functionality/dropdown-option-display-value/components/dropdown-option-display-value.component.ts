import { Component } from '@angular/core';

import { demoSnippet, optionDisplayUsage } from './dropdown-option-display-value.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-option-display-value',
  templateUrl: './dropdown-option-display-value.component.html',
  styleUrls: ['./dropdown-option-display-value.component.scss']
})
export class DropdownOptionDisplayValueComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public optionDisplayUsage = optionDisplayUsage;
}
