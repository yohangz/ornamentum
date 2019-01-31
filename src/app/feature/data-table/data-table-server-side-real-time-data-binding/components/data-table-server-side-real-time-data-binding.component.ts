import { Component } from '@angular/core';

import { demoSnippet, clientSideRealTimeDataBindingUsage } from './data-table-server-side-real-time-data-binding.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-server-side-real-time-data-binding-component',
  templateUrl: './data-table-server-side-real-time-data-binding.component.html',
  styleUrls: ['./data-table-server-side-real-time-data-binding.component.scss']
})
export class DataTableServerSideRealTimeDataBindingComponent {
  public FileType = FileType;

  public realTimeDataBindingUsage = clientSideRealTimeDataBindingUsage;
  public demoSnippet = demoSnippet;
}
