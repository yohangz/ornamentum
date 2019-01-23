import { Component } from '@angular/core';

import {
  demoSnippet,
  multiRowSelectionUsage,
  rowSelectionUsage,
  selectedRowsUsage,
  selectedRowUsage,
  singleRowSelectionUsage,
  singleToggleRowSelectionUsage
} from './data-table-row-selection.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-row-selection-component',
  templateUrl: './data-table-row-selection.component.html',
  styleUrls: ['./data-table-row-selection.component.scss']
})
export class DataTableRowSelectionComponent {
  public FileType = FileType;

  public singleRowSelectionUsage = singleRowSelectionUsage;
  public singleToggleRowSelectionUsage = singleToggleRowSelectionUsage;
  public multiRowSelectionUsage = multiRowSelectionUsage;
  public rowSelectionUsage = rowSelectionUsage;
  public selectedRowUsage = selectedRowUsage;
  public selectedRowsUsage = selectedRowsUsage;
  public demoSnippet = demoSnippet;
}
