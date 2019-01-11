import { Component, Input } from '@angular/core';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

import { DataTableConfigService } from '../../services/data-table-config.service';

/**
 * Data table column group component; This component wraps data table column groups
 */
@Component({
  exportAs: 'ngDataTableColGroup',
  // tslint:disable-next-line
  selector: '[ngDataTableColGroup]',
  templateUrl: './data-table-col-group.component.html'
})
export class DataTableColGroupComponent {
  @Input()
  public columns: DataTableColumnComponent;

  constructor(public config: DataTableConfigService) {
  }
}

