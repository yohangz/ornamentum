import { Component } from '@angular/core';

import {
  DataTableParams,
  DataTableTranslations,
  DataTableResource,
  DataTableComponent
} from '../../../library/data-table';

import { DataStorageService } from '../../services/data-storage.service';

declare function require(url: string);

const data = require('../../data/grid-data.json');

@Component({
  providers: [DataStorageService],
  selector: 'app-data-table-example-component',
  templateUrl: './data-table-example.component.html',
  styleUrls: ['./data-table-example.component.scss']
})
export class DataTableExampleComponent {
  private static configurationStorageKeyName = 'app_initial_conf';

  public initialConfigurations: {
    autoFetch: boolean;
    showIndexColumn: boolean;
    rowSelectable: boolean;
    multiColumnSortable: boolean;
    expandableRows: boolean;
    remoteDataFetch: boolean;
  };

  public gridTitle: string;
  public filterDebounce: boolean;
  public multiRowSelectable: boolean;
  public pageable: boolean;
  public selectOnRowClick: boolean;
  public showHeader: boolean;
  public showLoadingSpinner: boolean;
  public showSubstituteRows: boolean;
  public filterDebounceTime: number;
  public indexColumnTitle: string;
  public contentHeight: string;
  public itemCount: number;
  public items: any[];
  public limit: number;
  public page: number;

  public tableResource: DataTableResource<any>;
  public dataTableComponent: DataTableComponent;

  // private translations: DataTableTranslations;

  constructor(private dataStorageService: DataStorageService) {
    this.initialConfigurations = this.dataStorageService.get(DataTableExampleComponent.configurationStorageKeyName) ||
      {
        autoFetch: true,
        showIndexColumn: true,
        rowSelectable: true,
        multiColumnSortable: false,
        expandableRows: true,
        remoteDataFetch: false
      };

    this.gridTitle = 'Stations Details in the New York City Bike Sharing Initiative';
    this.filterDebounce = true;
    this.multiRowSelectable = false;
    this.pageable = true;
    this.selectOnRowClick = true;
    this.showHeader = true;
    this.showLoadingSpinner = true;
    this.showSubstituteRows = true;
    this.filterDebounceTime = 500;
    this.contentHeight = '300px';
    this.indexColumnTitle = '#';
    this.limit = 10;
    this.page = 1;
    // this.translations = {
    //   noDataMessageBody: 'ඩේටා නොමැත. සමාවන්න !!',
    //   noDataMessageHeader: 'Header'
    // };
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
   * On data table init event callback.
   * @param {DataTableComponent} dataTableComponent Data table reference.
   */
  public onInit(dataTableComponent: DataTableComponent): void {
    this.dataTableComponent = dataTableComponent;
  }

  /**
   * On edit functionality.
   * @param item
   * @param event
   */
  public onEdit(item: any, event: any): void {
    event.stopPropagation();
    console.log(item);
  }

  /**
   * Responsible for reloading page after updating initial loading configurations.
   * Store all the updated configurations in the local storage.
   */
  public reloadConfigurations(): void {
    this.dataStorageService.set(DataTableExampleComponent.configurationStorageKeyName, this.initialConfigurations);
    location.reload();
  }

  /**
   * Fetch algorithms data and bind to the data table source.
   */
  private fetchAlgorithmsData(): void {
    this.tableResource = new DataTableResource();

    if (!this.initialConfigurations.remoteDataFetch) {
      this.tableResource.items = data.stationBeanList;
    }

    this.tableResource.count().then((count) => this.itemCount = count);
  }
}

