import { Component } from '@angular/core';

import { demoSnippet, optionTemplateUsage } from './dropdown-option-template.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-option-template-component',
  templateUrl: './dropdown-option-template.component.html',
  styleUrls: ['./dropdown-option-template.component.scss']
})
export class DropdownOptionTemplateComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public optionTemplateUsage = optionTemplateUsage;
}
