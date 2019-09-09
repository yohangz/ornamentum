import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import { demoSnippet, columnBindingUsage } from './data-table-resizing.list';

@Component({
  selector: 'app-data-table-column-binding-component',
  templateUrl: './data-table-column-binding.component.html',
  styleUrls: ['./data-table-column-binding.component.scss']
})
export class DataTableColumnBindingComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public columnBindingUsage = columnBindingUsage;
}
