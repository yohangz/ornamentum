import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import {
  demoSnippet,
  itemsUsage,
  dataSourceUsage,
} from './data-table-client-side-basic.list';

@Component({
  selector: 'app-data-table-client-side-basic-component',
  templateUrl: './data-table-client-side-basic.component.html',
  styleUrls: ['./data-table-client-side-basic.component.scss']
})
export class DataTableClientSideBasicComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public itemsUsage = itemsUsage;
  public dataSourceUsage = dataSourceUsage;
}
