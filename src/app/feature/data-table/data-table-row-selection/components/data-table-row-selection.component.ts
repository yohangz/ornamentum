import { Component } from '@angular/core';

import { multiRowSelectionUsage, singleRowSelectionUsage, singleToggleRowSelectionUsage } from './data-table-row-selection.list';

@Component({
  selector: 'app-data-table-row-selection-component',
  templateUrl: './data-table-row-selection.component.html',
  styleUrls: ['./data-table-row-selection.component.scss']
})
export class DataTableRowSelectionComponent {
  public singleRowSelectionUsage = singleRowSelectionUsage;
  public singleToggleRowSelectionUsage = singleToggleRowSelectionUsage;
  public multiRowSelectionUsage = multiRowSelectionUsage;
}
