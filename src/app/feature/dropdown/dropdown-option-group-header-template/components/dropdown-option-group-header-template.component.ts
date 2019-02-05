import { Component } from '@angular/core';

import { demoSnippet, optionGroupHeaderTemplateUsage } from './dropdown-option-group-header-template.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-option-group-header-template-component',
  templateUrl: './dropdown-option-group-header-template.component.html',
  styleUrls: ['./dropdown-option-group-header-template.component.scss']
})
export class DropdownOptionGroupHeaderTemplateComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public optionGroupHeaderTemplateUsage = optionGroupHeaderTemplateUsage;
}
