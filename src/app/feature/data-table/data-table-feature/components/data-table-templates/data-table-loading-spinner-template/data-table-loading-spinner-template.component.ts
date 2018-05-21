import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { demoSnippet } from './data-table-loading-spinner-template';
import { sampleData } from '../../../data/data-table-example';

@Component({
  selector: 'app-data-table-loading-spinner-template-component',
  templateUrl: './data-table-loading-spinner-template.component.html',
  styleUrls: ['./data-table-loading-spinner-template.component.scss']
})
export class DataTableLoadingSpinnerTemplateComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public demoSnippet = demoSnippet;

  public items: any[];

  constructor() {
    setTimeout(() => {
      this.items = sampleData;
    }, 3000);
  }
}
