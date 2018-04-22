import  { Component } from '@angular/core';

import { DataTableSelectMode } from '../../../../../../library/index';

import { Observable } from 'rxjs/Observable';

import { sampleData } from '../../data/data-table-example';

@Component({
  selector: 'app-data-table-cell-template-component',
  templateUrl: './data-table-cell-template.component.html',
  styleUrls: ['./data-table-cell-template.component.scss']
})
export class DataTableCellTemplateComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  public code=`  <ng-template #ngDataTableCell let-row="row">
    <td>
      {{row.item.statusValue.toUpperCase()}}
    </td>
  </ng-template>`;

  constructor() {
    this.items = Observable.of(sampleData);
  }
}
