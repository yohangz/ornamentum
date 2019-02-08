import { Component } from '@angular/core';

import { demoSnippet, loadingSpinnerTemplateUsage } from './dropdown-loading-spinner-template.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-loading-spinner-template-component',
  templateUrl: './dropdown-loading-spinner-template.component.html',
  styleUrls: ['./dropdown-loading-spinner-template.component.scss']
})
export class DropdownLoadingSpinnerTemplateComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public loadingSpinnerTemplateUsage = loadingSpinnerTemplateUsage;
}
