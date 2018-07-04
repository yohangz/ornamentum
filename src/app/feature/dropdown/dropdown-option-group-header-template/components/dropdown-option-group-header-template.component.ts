import { Component } from '@angular/core';

import { optionGroupHeaderTemplateUsage } from './dropdown-option-group-header-template.list';

import { demoSnippet } from './dropdown-option-group-header-template';

@Component({
  selector: 'app-dropdown-option-group-header-template-component',
  templateUrl: './dropdown-option-group-header-template.component.html',
  styleUrls: ['./dropdown-option-group-header-template.component.scss']
})
export class DropdownOptionGroupHeaderTemplateComponent {
  public optionGroupHeaderTemplateUsage = optionGroupHeaderTemplateUsage;

  public demoSnippet = demoSnippet;
}
