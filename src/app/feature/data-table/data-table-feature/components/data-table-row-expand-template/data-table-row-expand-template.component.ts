import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { sampleData } from '../../data/data-table-example';

@Component({
  selector: 'app-data-table-row-expand-template-component',
  templateUrl: './data-table-row-expand-template.component.html',
  styleUrls: ['./data-table-row-expand-template.component.scss']
})
export class DataTableRowExpandTemplateComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  public code = `  <ng-template #ngDataTableRowExpand let-row="row">
    <span>This is row expand template</span>
  </ng-template>`;

  constructor() {
    this.items = of(sampleData);
  }
}
