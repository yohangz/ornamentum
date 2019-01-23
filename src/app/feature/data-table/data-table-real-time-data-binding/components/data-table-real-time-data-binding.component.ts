import { Component } from '@angular/core';

import { demoSnippet, realTimeDataBindingUsage } from './data-table-real-time-data-binding.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-real-time-data-binding-component',
  templateUrl: './data-table-real-time-data-binding.component.html',
  styleUrls: ['./data-table-real-time-data-binding.component.scss']
})
export class DataTableRealTimeDataBindingComponent {
  public FileType = FileType;

  public realTimeDataBindingUsage = realTimeDataBindingUsage;
  public demoSnippet = demoSnippet;
}
