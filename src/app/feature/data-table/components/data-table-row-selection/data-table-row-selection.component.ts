import { Component } from '@angular/core';

import { rowSelectionUsage } from './data-table-row-selection.list';

@Component({
  selector: 'app-data-table-row-selection-component',
  templateUrl: './data-table-row-selection.component.html',
  styleUrls: ['./data-table-row-selection.component.scss']
})
export class DataTableRowSelectionComponent {
  public rowSelectionUsage = rowSelectionUsage;
}
