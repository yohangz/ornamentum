import { Component, Input } from '@angular/core';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

import { DataTableConfigService } from '../../services/data-table-config.service';

@Component({
  selector: 'ng-data-table-column-selector',
  styleUrls: ['./data-table-column-selector.component.scss'],
  templateUrl: './data-table-column-selector.component.html'
})
export class DataTableColumnSelectorComponent {
  @Input()
  public columns: DataTableColumnComponent;

  public expandableRows: boolean;
  public showIndexColumn: boolean;
  public showRowSelectCheckboxColumn: boolean;

  constructor(public config: DataTableConfigService) {
    this.expandableRows = config.rowSelectable;
    this.showIndexColumn = config.showIndexColumn;
    this.showRowSelectCheckboxColumn = config.showRowSelectCheckboxColumn;
  }
}
