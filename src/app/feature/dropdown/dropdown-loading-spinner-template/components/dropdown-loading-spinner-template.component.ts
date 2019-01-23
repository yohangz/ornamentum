import { Component } from '@angular/core';

import { loadingSpinnerTemplateUsage } from './dropdown-loading-spinner-template.list';

import { demoSnippet } from './dropdown-loading-spinner-template';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-loading-spinner-template-component',
  templateUrl: './dropdown-loading-spinner-template.component.html',
  styleUrls: ['./dropdown-loading-spinner-template.component.scss']
})
export class DropdownLoadingSpinnerTemplateComponent {
  public FileType = FileType;

  public loadingSpinnerTemplateUsage = loadingSpinnerTemplateUsage;

  public demoSnippet = demoSnippet;
}
