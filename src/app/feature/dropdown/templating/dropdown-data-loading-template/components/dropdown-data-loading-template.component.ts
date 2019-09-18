import { Component } from '@angular/core';

import { demoSnippet, dataLoadingTemplateUsage } from './dropdown-data-loading-template.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-data-loading-template-component',
  templateUrl: './dropdown-data-loading-template.component.html',
  styleUrls: ['./dropdown-data-loading-template.component.scss']
})
export class DropdownDataLoadingTemplateComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public dataLoadingTemplateUsage = dataLoadingTemplateUsage;
}
