import { Component } from '@angular/core';

import {
  demoSnippet,
  itemsUsage,
  dataSourceUsage,
} from './data-table-client-side-data-binding.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-client-side-data-binding-component',
  templateUrl: './data-table-client-side-data-binding.component.html',
  styleUrls: ['./data-table-client-side-data-binding.component.scss']
})
export class DataTableClientSideDataBindingComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public itemsUsage = itemsUsage;
  public dataSourceUsage = dataSourceUsage;
}
