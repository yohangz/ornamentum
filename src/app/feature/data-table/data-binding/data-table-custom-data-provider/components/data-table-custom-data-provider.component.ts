import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import { demoSnippet, serverSideBasicUsage, serverSideBasicUsageWithMap } from './data-table-custom-data-provider.list';

@Component({
  selector: 'app-data-table-custom-data-provider',
  templateUrl: './data-table-custom-data-provider.component.html',
  styleUrls: ['./data-table-custom-data-provider.component.scss']
})
export class DataTableCustomDataProviderComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public serverSideBasicUsage = serverSideBasicUsage;
  public serverSideBasicUsageWithMap = serverSideBasicUsageWithMap;
}
