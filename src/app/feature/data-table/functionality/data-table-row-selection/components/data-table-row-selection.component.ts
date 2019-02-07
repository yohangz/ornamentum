import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import {
  demoSnippet,
  rowSelectionUsage,
  singleRowSelectionUsage,
  singleToggleRowSelectionUsage,
  multiRowSelectionUsage,
  showRowSelectCheckboxUsage,
  showRowSelectAllCheckboxUsage,
  selectOnRowClickUsage,
  selectTrackByUsage,
  setSelectedRowUsage,
  setSelectedRowsUsage
} from './data-table-row-selection.list';

@Component({
  selector: 'app-data-table-row-selection-component',
  templateUrl: './data-table-row-selection.component.html',
  styleUrls: ['./data-table-row-selection.component.scss']
})
export class DataTableRowSelectionComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public rowSelectionUsage = rowSelectionUsage;
  public singleRowSelectionUsage = singleRowSelectionUsage;
  public singleToggleRowSelectionUsage = singleToggleRowSelectionUsage;
  public multiRowSelectionUsage = multiRowSelectionUsage;
  public showRowSelectCheckboxUsage = showRowSelectCheckboxUsage;
  public showRowSelectAllCheckboxUsage = showRowSelectAllCheckboxUsage;
  public selectOnRowClickUsage = selectOnRowClickUsage;
  public selectTrackByUsage = selectTrackByUsage;
  public setSelectedRowUsage = setSelectedRowUsage;
  public setSelectedRowsUsage = setSelectedRowsUsage;
}
