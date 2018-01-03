import { Component } from '@angular/core';

import {
  DataTableParams,
  DataTableTranslations,
  DataTableResource,
  DataTableComponent
} from '../../../library/data-table';

declare function require(url: string);
const data = require('../../data/grid-data.json');

@Component({
  selector: 'app-data-table-example-component',
  templateUrl: './data-table-example.component.html',
  styleUrls: ['./data-table-example.component.scss']
})
export class DataTableExampleComponent {
  gridTitle: string;
  autoFetch: boolean;
  expandableRows: boolean;
  filterDebounce: boolean;
  multiRowSelectable: boolean;
  pageable: boolean;
  rowSelectable: boolean;
  selectOnRowClick: boolean;
  showHeader: boolean;
  showIndexColumn: boolean;
  showLoadingSpinner: boolean;
  showSubstituteRows: boolean;
  filterDebounceTime: number;
  indexColumnTitle: string;
  contentHeight: string;
  itemCount: number;
  items: any[];
  limit: number;
  page: number;
  tableResource: DataTableResource<any>;
  translations: DataTableTranslations;
  dataTableComponent: DataTableComponent;

  constructor() {
    this.gridTitle = 'Algorithms Grid';
    this.autoFetch = true;
    this.expandableRows = true;
    this.filterDebounce = true;
    this.multiRowSelectable = false;
    this.pageable = true;
    this.rowSelectable = true;
    this.selectOnRowClick = true;
    this.showHeader = true;
    this.showIndexColumn = true;
    this.showLoadingSpinner = true;
    this.showSubstituteRows = true;
    this.filterDebounceTime = 500;
    this.contentHeight = '300px';
    this.indexColumnTitle = '#';
    this.limit = 10;
    this.page = 1;
    this.translations = {
      noDataMessageBody: 'ඩේටා නොමැත. සමාවන්න !!',
      noDataMessageHeader: 'Header'
    };
    this.items = [];

    this.fetchAlgorithmsData();
  }

  /**
   * Data table refresh event handler.
   * @param params  Event payload.
   */
  public onRefresh(params?: any): void {
    this.fetchAlgorithmsData();
    this.tableResource.query(params).then((items) => this.items = items);
  }

  /**
   * Data table data load event handler.
   * @param {DataTableParams} params  grid parameters.
   */
  public onDataLoad(params?: any): void {
    this.tableResource.query(params).then((items) => this.items = items);
  }

  /**
   * Fetch algorithms data and bind to the data table source.
   */
  private fetchAlgorithmsData(): void {
    this.tableResource = new DataTableResource();
    this.tableResource.items = data;

    this.tableResource.count().then((count) => this.itemCount = count);
  }

  /**
   * On data table init event callback.
   * @param {DataTableComponent} dataTableComponent Data table reference.
   */
  public onInit(dataTableComponent: DataTableComponent): void {
    this.dataTableComponent = dataTableComponent;
  }
}

