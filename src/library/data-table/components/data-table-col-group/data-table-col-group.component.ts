import { Component, forwardRef, Inject } from '@angular/core';

import { DataTableComponent } from '../data-table/data-table.component';

/**
 * Data table column group component.
 * @class DataTableColGroup
 */
@Component({
  exportAs: 'ngDataTableColGroup',
  selector: '[ngDataTableColGroup]',
  styleUrls: [ './data-table-col-group.component.scss' ],
  templateUrl: './data-table-col-group.component.html'
})
export class DataTableColGroupComponent {
  constructor(@Inject(forwardRef(() => DataTableComponent)) public dataTable: DataTableComponent) {
  }
}
