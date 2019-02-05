import { Component } from '@angular/core';

import {
  demoSnippet,
  paginationUsage,
  pageUsage,
  limitUsage
} from './data-table-pagination.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-pagination-component',
  templateUrl: './data-table-pagination.component.html',
  styleUrls: ['./data-table-pagination.component.scss']
})
export class DataTablePaginationComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public paginationUsage = paginationUsage;
  public pageUsage = pageUsage;
  public limitUsage = limitUsage;
}
