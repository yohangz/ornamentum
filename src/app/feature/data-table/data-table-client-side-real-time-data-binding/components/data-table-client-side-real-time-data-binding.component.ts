import { Component } from '@angular/core';

import { demoSnippet, clientSideRealTimeDataBindingUsage } from './data-table-client-side-real-time-data-binding.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-client-side-real-time-data-binding-component',
  templateUrl: './data-table-client-side-real-time-data-binding.component.html',
  styleUrls: ['./data-table-client-side-real-time-data-binding.component.scss']
})
export class DataTableClientSideRealTimeDataBindingComponent {
  public FileType = FileType;

  public realTimeDataBindingUsage = clientSideRealTimeDataBindingUsage;
  public demoSnippet = demoSnippet;
}
