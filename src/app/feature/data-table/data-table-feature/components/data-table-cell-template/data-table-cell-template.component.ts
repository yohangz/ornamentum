import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { sampleData } from '../../data/data-table-example';
import { demoSnippet } from './data-table-cell-template';

@Component({
  selector: 'app-data-table-cell-template-component',
  templateUrl: './data-table-cell-template.component.html',
  styleUrls: ['./data-table-cell-template.component.scss']
})
export class DataTableCellTemplateComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  public demoSnippet = demoSnippet;

  constructor() {
    this.items = of(sampleData);
  }
}
