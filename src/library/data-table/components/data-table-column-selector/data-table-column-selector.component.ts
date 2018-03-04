import { Component, Input } from '@angular/core';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

@Component({
  selector: 'ng-data-table-column-selector',
  styleUrls: ['./data-table-column-selector.component.scss'],
  templateUrl: './data-table-column-selector.component.html'
})
export class DataTableColumnSelectorComponent {
  @Input()
  public columns: DataTableColumnComponent;
}
