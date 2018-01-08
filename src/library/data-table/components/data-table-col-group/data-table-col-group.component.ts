import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

/**
 * Data table column group component.
 * @class DataTableColGroup
 */
@Component({
  exportAs: 'ngDataTableColGroup',
  selector: '[ngDataTableColGroup]',
  styleUrls: ['./data-table-col-group.component.scss'],
  templateUrl: './data-table-col-group.component.html'
})
export class DataTableColGroupComponent {
  @Input()
  public expandColumnVisible: boolean;

  @Input()
  public indexColumnVisible: boolean;

  @Input()
  public selectColumnVisible: boolean;

  @Input()
  public expanderColumnWidth: boolean;

  @Input()
  public indexColumnWidth: boolean;

  @Input()
  public selectionColumnWidth: boolean;

  @Input()
  public columns: DataTableColumnComponent;
}

