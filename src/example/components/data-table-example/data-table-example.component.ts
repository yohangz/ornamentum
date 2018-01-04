import { Component } from '@angular/core';

import {
  DataTableParams,
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
  private static tableConfigurationStorageKeyName = 'app_table_init_conf';

  public initialTableConf: {
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

  public firstColConf: {
    width: number;
    title: string;
    filterPlaceholder: string;
    sortable: boolean;
    filterable: boolean;
    resizable: boolean;
    enableMultiSelectFilter: boolean;
    visible: boolean;
  };
  public secondColConf: {
    title: string;
  };
  public thirdColConf: {
    title: string;
  };
  public forthColConf: {
    title: string;
  };
  public fifthColConf: {
    title: string;
  };
  public sixthColConf: {
    title: string;
  };
  public seventhColConf: {
    title: string;
  };
  public eighthColConf: {
    title: string;
  };
  public ninthColConf: {
    title: string;
  };
  public tenthColConf: {
    title: string;
  };

  constructor(private dataStorageService: DataStorageService) {
    this.initialTableConf = this.dataStorageService.get(DataTableExampleComponent.tableConfigurationStorageKeyName) ||
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
    this.items = [];

    this.firstColConf = {
      width: 80,
      title: 'ID',
      filterPlaceholder: '',
      sortable: true,
      filterable: true,
      resizable: false,
      enableMultiSelectFilter: false,
      visible: true
    };
    this.secondColConf = {
      title: 'Station Name'
    };
    this.thirdColConf = {
      title: 'Latitude'
    };
    this.forthColConf = {
      title: 'Longitude'
    };
    this.fifthColConf = {
      title: 'Available Docks'
    };
    this.sixthColConf = {
      title: 'Total Docks'
    };
    this.seventhColConf = {
      title: 'Status'
    };
    this.eighthColConf = {
      title: 'Available Bikes'
    };
    this.ninthColConf = {
      title: 'Last Communication Time'
    };
    this.tenthColConf = {
      title: 'Action'
    };

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
   * Responsible for reloading page after updating initial table loading configurations.
   * Store all the updated configurations in the local storage.
   */
  public reloadTableConfigurations(): void {
    this.dataStorageService.set(DataTableExampleComponent.tableConfigurationStorageKeyName, this.initialTableConf);
    location.reload();
  }

  /**
   * Fetch algorithms data and bind to the data table source.
   */
  private fetchAlgorithmsData(): void {
    this.tableResource = new DataTableResource();

    if (!this.initialTableConf.remoteDataFetch) {
      this.tableResource.items = data.stationBeanList;
    }

    this.tableResource.count().then((count) => this.itemCount = count);
  }
}

