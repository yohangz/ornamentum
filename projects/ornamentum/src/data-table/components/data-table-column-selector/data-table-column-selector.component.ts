import { Component, Input } from '@angular/core';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

/**
 * Data table column selector component
 */
@Component({
  selector: 'ng-data-table-column-selector',
  templateUrl: './data-table-column-selector.component.html'
})
export class DataTableColumnSelectorComponent {
  @Input()
  public columns: DataTableColumnComponent;
}
