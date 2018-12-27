import { Component } from '@angular/core';

import { optionTemplateUsage, demoSnippet } from './dropdown-option-template.list';

@Component({
  selector: 'app-dropdown-option-template-component',
  templateUrl: './dropdown-option-template.component.html',
  styleUrls: ['./dropdown-option-template.component.scss']
})
export class DropdownOptionTemplateComponent {
  public optionTemplateUsage = optionTemplateUsage;
  public demoSnippet = demoSnippet;
}
