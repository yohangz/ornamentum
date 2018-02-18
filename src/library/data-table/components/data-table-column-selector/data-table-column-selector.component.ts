import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { DataTableConfigService } from '../../services/data-table-config.service';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

@Component({
  selector: 'ng-data-table-column-selector',
  styleUrls: ['./data-table-column-selector.component.scss'],
  templateUrl: './data-table-column-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableColumnSelectorComponent {
  @Input()
  public columns: DataTableColumnComponent;

  public expandableRows: boolean;
  public showIndexColumn: boolean;
  public rowSelectable: boolean;

  constructor(public config: DataTableConfigService) {
    this.expandableRows = config.rowSelectable;
    this.showIndexColumn = config.showIndexColumn;
    this.rowSelectable = config.rowSelectable;
  }
}
