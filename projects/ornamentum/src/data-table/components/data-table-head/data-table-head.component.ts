import { Component, Input } from '@angular/core';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

/**
 * Data table header component; Render data table column title and filter header rows
 */
@Component({
  exportAs: 'ngDataTableHead',
  // tslint:disable-next-line
  selector: '[ngDataTableHead]',
  templateUrl: './data-table-head.component.html'
})
export class DataTableHeadComponent {
  @Input()
  public columns: DataTableColumnComponent[];

  /**
   * Get filter column availability status
   * @return True if there is at least one filter column
   */
  public get hasFilterColumns(): boolean {
    return this.columns.some((column: DataTableColumnComponent) => column.filterable);
  }
}
