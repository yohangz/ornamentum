import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import { demoSnippet, serverSideBasicUsage, serverSideBasicUsageWithMap } from './dropdown-custom-data-provider.list';

@Component({
  selector: 'app-dropdown-custom-data-provider',
  templateUrl: './dropdown-custom-data-provider.component.html',
  styleUrls: ['./dropdown-custom-data-provider.component.scss']
})
export class DropdownCustomDataProviderComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public serverSideBasicUsage = serverSideBasicUsage;
  public serverSideBasicUsageWithMap = serverSideBasicUsageWithMap;
}
