import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import { demoSnippet, dynamicRowSpanUsage } from './data-table-row-grouping.list';

@Component({
  selector: 'app-data-table-dynamic-row-span-component',
  templateUrl: './data-table-dynamic-row-span.component.html',
  styleUrls: ['./data-table-dynamic-row-span.component.scss']
})
export class DataTableDynamicRowSpanComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public dynamicRowSpanUsage = dynamicRowSpanUsage;
}
