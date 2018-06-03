import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { demoSnippet } from './data-table-no-records-template';

@Component({
  selector: 'app-data-table-no-records-template-component',
  templateUrl: './data-table-no-records-template.component.html',
  styleUrls: ['./data-table-no-records-template.component.scss']
})
export class DataTableNoRecordsTemplateComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  public demoSnippet = demoSnippet;

  constructor() {
    this.items = of([]);
  }
}
