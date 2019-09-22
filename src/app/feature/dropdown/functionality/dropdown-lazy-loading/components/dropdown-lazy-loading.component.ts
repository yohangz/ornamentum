import { Component } from '@angular/core';

import { demoSnippet, dataLimitUsage, pageUsage, loadViewDistance } from './dropdown-lazy-loading.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-data-limit-component',
  templateUrl: './dropdown-lazy-loading.component.html',
  styleUrls: ['./dropdown-lazy-loading.component.scss']
})
export class DropdownLazyLoadingComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public dataLimitUsage = dataLimitUsage;

  public pageUsage = pageUsage;

  public loadViewDistance = loadViewDistance;
}
