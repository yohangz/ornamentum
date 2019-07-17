import { Component, Input } from '@angular/core';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

/**
 * Data table column selector component; Toggle display state of columns via this popup component
 */
@Component({
  selector: 'ng-data-table-column-selector',
  templateUrl: './data-table-column-selector.component.html'
})
export class DataTableColumnSelectorComponent {
  @Input()
  public columns: DataTableColumnComponent[];

  @Input()
  public width: number|string;
}
