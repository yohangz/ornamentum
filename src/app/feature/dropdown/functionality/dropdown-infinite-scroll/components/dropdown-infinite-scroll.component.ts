import { Component } from '@angular/core';

import { demoSnippet, dataLimitUsage, pageUsage, loadViewDistance } from './dropdown-infinite-scroll.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-data-limit-component',
  templateUrl: './dropdown-infinite-scroll.component.html',
  styleUrls: ['./dropdown-infinite-scroll.component.scss']
})
export class DropdownInfiniteScrollComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public dataLimitUsage = dataLimitUsage;

  public pageUsage = pageUsage;

  public loadViewDistance = loadViewDistance;
}
