import { Component, Input } from '@angular/core';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

@Component({
  exportAs: 'ngDataTableHead',
  // tslint:disable-next-line
  selector: '[ngDataTableHead]',
  styleUrls: ['./data-table-head.component.scss'],
  templateUrl: './data-table-head.component.html'
})
export class DataTableHeadComponent {
  @Input()
  public columns: DataTableColumnComponent[];

  public get hasFilterColumns(): boolean {
    return this.columns.some((column: DataTableColumnComponent) => column.filterable);
  }
}
