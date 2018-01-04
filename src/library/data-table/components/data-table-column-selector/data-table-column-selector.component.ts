import { Component, Input } from '@angular/core';
import { ColumnSelectorProperty } from '../../models/data-table.model';

@Component({
  selector: 'ng-data-table-column-selector',
  styleUrls: [ './data-table-column-selector.component.scss' ],
  templateUrl: './data-table-column-selector.component.html'
})
export class DataTableColumnSelectorComponent {
  @Input()
  public props: ColumnSelectorProperty;
}
