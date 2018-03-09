import { Component } from '@angular/core';

import {
  DataTableComponent,
  DropdownMenuPosition,
  DataTableRow,
  DataTableColumnComponent,
  DataTableSelectMode,
  DataFetchMode,
  DataTableRequestParams,
  DataTableQueryResult
} from '../../../library';

import { Observable } from 'rxjs/Observable';

import { DataStorageService } from '../../services/data-storage.service';

import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/timeout';
import { Subject } from 'rxjs/Subject';

declare function require(url: string);

/**
 * Interface representing column configurations.
 *
 * @interface ColumnConf.
 */
export interface ColumnConf {
  width?: number;
  title?: string;
  filterPlaceholder?: string;
  sortable?: boolean;
  filterable?: boolean;
  resizable?: boolean;
  visible?: boolean;
}

@Component({
  providers: [DataStorageService],
  selector: 'app-data-table-example-component',
  templateUrl: './data-table-example.component.html',
  styleUrls: ['./data-table-example.component.scss']
})
export class DataTableExampleComponent {
  public MenuPosition = DropdownMenuPosition;
  public DataTableSelectMode = DataTableSelectMode;
  public DataFetchMode = DataFetchMode;

  private static tableConfigurationStorageKeyName = 'app_table_init_conf';
  private static columnConfigurationStorageKeyName = 'app_column_init_conf';

  public initialTableConf: {
    autoFetch: boolean;
    showIndexColumn: boolean;
    rowSelectable: boolean;
    multiColumnSortable: boolean;
    expandableRows: boolean;
    remoteDataFetch: boolean;
  };

  public initialColumnConf: {
    multiSelectFilter1: boolean;
    multiSelectFilter2: boolean;
    multiSelectFilter3: boolean;
    multiSelectFilter4: boolean;
    multiSelectFilter5: boolean;
    multiSelectFilter6: boolean;
    multiSelectFilter7: boolean;
    multiSelectFilter8: boolean;
    multiSelectFilter9: boolean;
  };

  public selectedDataItems: any;

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
  public limit: number;
  public page: number;
  public expandOnRowClick: boolean;

  public dataTableComponent: DataTableComponent;

  public firstColConf: ColumnConf;
  public secondColConf: ColumnConf;
  public thirdColConf: ColumnConf;
  public forthColConf: ColumnConf;
  public fifthColConf: ColumnConf;
  public sixthColConf: ColumnConf;
  public seventhColConf: ColumnConf;
  public eighthColConf: ColumnConf;
  public ninthColConf: ColumnConf;
  public tenthColConf: ColumnConf;

  public items: Observable<any>;
  //public items = new Subject();

  constructor(private dataStorageService: DataStorageService, private http: HttpClient) {
    this.initialTableConf = this.dataStorageService.get(DataTableExampleComponent.tableConfigurationStorageKeyName) ||
      {
        autoFetch: true,
        showIndexColumn: true,
        rowSelectable: true,
        multiColumnSortable: false,
        expandableRows: true,
        remoteDataFetch: false
      };

    this.initialColumnConf = this.dataStorageService.get(DataTableExampleComponent.columnConfigurationStorageKeyName) ||
      {
        multiSelectFilter1: false,
        multiSelectFilter2: false,
        multiSelectFilter3: false,
        multiSelectFilter4: false,
        multiSelectFilter5: false,
        multiSelectFilter6: false,
        multiSelectFilter7: false,
        multiSelectFilter8: false,
        multiSelectFilter9: false
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
    this.expandOnRowClick = false;

    this.firstColConf = {
      width: 80,
      title: 'ID',
      sortable: true,
      filterable: true,
      filterPlaceholder: '',
      resizable: false,
      visible: true
    };
    this.secondColConf = {
      title: 'Station Name',
      sortable: true,
      filterable: true,
      filterPlaceholder: '',
      resizable: false,
      visible: true
    };
    this.thirdColConf = {
      width: 120,
      title: 'Latitude',
      sortable: true,
      filterable: true,
      filterPlaceholder: '',
      resizable: false,
      visible: true
    };
    this.forthColConf = {
      width: 120,
      title: 'Longitude',
      sortable: true,
      filterable: true,
      filterPlaceholder: '',
      resizable: false,
      visible: true
    };
    this.fifthColConf = {
      width: 120,
      title: 'Available Docks',
      sortable: true,
      filterable: true,
      filterPlaceholder: '',
      resizable: false,
      visible: true
    };
    this.sixthColConf = {
      width: 110,
      title: 'Total Docks',
      sortable: true,
      filterable: true,
      filterPlaceholder: '',
      resizable: false,
      visible: true
    };
    this.seventhColConf = {
      width: 100,
      title: 'Status',
      sortable: true,
      filterable: true,
      filterPlaceholder: '',
      resizable: false,
      visible: true
    };
    this.eighthColConf = {
      width: 120,
      title: 'Available Bikes',
      sortable: true,
      filterable: true,
      filterPlaceholder: '',
      resizable: false,
      visible: true
    };
    this.ninthColConf = {
      width: 180,
      title: 'Last Communication Time',
      sortable: true,
      filterable: true,
      filterPlaceholder: '',
      resizable: false,
      visible: true
    };
    this.tenthColConf = {
      width: 100,
      title: 'Action',
      resizable: false,
      visible: true
    };

    // setInterval(() => {
    //   this.items.next([]);
    // }, 2000);

    // let count = 0;
    // setInterval(() => {
    //   this.items.next(data.stationBeanList.slice(0, count + 50));
    //   count += 50;
    // }, 2000);
    //this.items = Observable.of(data.stationBeanList);

    this.items = this.http.get('http://localhost:3334/test/test');



    // this.items =  Observable.of([
    //   {
    //     'id': 72,
    //     'stationName': 'W 52 St & 11 Ave',
    //     'availableDocks': 27,
    //     'totalDocks': 39,
    //     'latitude': 1,
    //     'longitude': -73.99392888,
    //     'statusValue': 'In Service',
    //     'statusKey': 1,
    //     'availableBikes': 10,
    //     'stAddress1': 'W 52 St & 11 Ave',
    //     'stAddress2': '',
    //     'city': '',
    //     'postalCode': '',
    //     'location': '',
    //     'altitude': '',
    //     'testStation': false,
    //     'lastCommunicationTime': '2018-01-03 10:40:29 AM',
    //     'landMark': '',
    //     nest: {
    //       level: {
    //         x: 5
    //       }
    //     },
    //     test: [
    //       {
    //         'latitude': 2,
    //         'longitude': -73.99392888,
    //       },
    //       {
    //         'latitude': 1,
    //         'longitude': -73.99392888,
    //       }
    //     ]
    //   },
    //   {
    //     'id': 79,
    //     'stationName': 'Franklin St & W Broadway',
    //     'availableDocks': 21,
    //     'totalDocks': 33,
    //     'latitude': 1,
    //     'longitude': -74.00666661,
    //     'statusValue': 'In Service',
    //     'statusKey': 1,
    //     'availableBikes': 12,
    //     'stAddress1': 'Franklin St & W Broadway',
    //     'stAddress2': '',
    //     'city': '',
    //     'postalCode': '',
    //     'location': '',
    //     'altitude': '',
    //     'testStation': false,
    //     'lastCommunicationTime': '2018-01-03 10:42:59 AM',
    //     'landMark': '',
    //     nest: {
    //       level: {
    //         x: 20
    //       }
    //     },
    //     test: [
    //       {
    //         'latitude': 5,
    //         'longitude': -73.99392888,
    //       },
    //       {
    //         'latitude': 7,
    //         'longitude': -73.99392888,
    //       }
    //     ]
    //   },
    //   {
    //     'id': 82,
    //     'stationName': 'St James Pl & Pearl St',
    //     'availableDocks': 12,
    //     'totalDocks': 27,
    //     'latitude': 40.71117416,
    //     'longitude': -74.00016545,
    //     'statusValue': 'In Service',
    //     'statusKey': 1,
    //     'availableBikes': 15,
    //     'stAddress1': 'St James Pl & Pearl St',
    //     'stAddress2': '',
    //     'city': '',
    //     'postalCode': '',
    //     'location': '',
    //     'altitude': '',
    //     'testStation': false,
    //     'lastCommunicationTime': '2018-01-03 10:40:21 AM',
    //     'landMark': '',
    //     nest: {
    //       level: {
    //         x: 0
    //       }
    //     },
    //     test: [
    //       {
    //         'latitude': 8,
    //         'longitude': -73.99392888,
    //       },
    //       {
    //         'latitude': 11,
    //         'longitude': -73.99392888,
    //       }
    //     ]
    //   },
    //   {
    //     'id': 83,
    //     'stationName': 'Atlantic Ave & Fort Greene Pl',
    //     'availableDocks': 24,
    //     'totalDocks': 62,
    //     'latitude': 40.68382604,
    //     'longitude': -73.97632328,
    //     'statusValue': 'In Service',
    //     'statusKey': 1,
    //     'availableBikes': 37,
    //     'stAddress1': 'Atlantic Ave & Fort Greene Pl',
    //     'stAddress2': '',
    //     'city': '',
    //     'postalCode': '',
    //     'location': '',
    //     'altitude': '',
    //     'testStation': false,
    //     'lastCommunicationTime': '2018-01-03 10:42:38 AM',
    //     'landMark': '',
    //     nest: {
    //       level: {
    //         x: 343434
    //       }
    //     },
    //     test: [
    //       {
    //         'latitude': 111,
    //         'longitude': -73.99392888,
    //       },
    //       {
    //         'latitude': 45,
    //         'longitude': -73.99392888,
    //       }
    //     ]
    //   },
    //   {
    //     'id': 116,
    //     'stationName': 'W 17 St & 8 Ave',
    //     'availableDocks': 1,
    //     'totalDocks': 7,
    //     'latitude': 1,
    //     'longitude': -74.00149746,
    //     'statusValue': 'Not In Service',
    //     'statusKey': 3,
    //     'availableBikes': 0,
    //     'stAddress1': 'W 17 St & 8 Ave',
    //     'stAddress2': '',
    //     'city': '',
    //     'postalCode': '',
    //     'location': '',
    //     'altitude': '',
    //     'testStation': false,
    //     'lastCommunicationTime': '2017-11-14 08:58:16 AM',
    //     'landMark': '',
    //     nest: {
    //       level: {
    //         x: -5
    //       }
    //     },
    //     test: [
    //       {
    //         'latitude': 67657,
    //         'longitude': -73.99392888,
    //       },
    //       {
    //         'latitude': 238,
    //         'longitude': -73.99392888,
    //       }
    //     ]
    //   }
    // ]).debounceTime(5000);
  }

  public onDataBind(params: DataTableRequestParams): Observable<DataTableQueryResult<any>> {
    const source = new Subject<DataTableQueryResult<any>>();
     setTimeout(() => {
      source.next({items: [
        {
          'id': 72,
          'stationName': 'W 52 St & 11 Ave',
          'availableDocks': 27,
          'totalDocks': 39,
          'latitude': 1,
          'longitude': -73.99392888,
          'statusValue': 'In Service',
          'statusKey': 1,
          'availableBikes': 10,
          'stAddress1': 'W 52 St & 11 Ave',
          'stAddress2': '',
          'city': '',
          'postalCode': '',
          'location': '',
          'altitude': '',
          'testStation': false,
          'lastCommunicationTime': '2018-01-03 10:40:29 AM',
          'landMark': '',
          nest: {
            level: {
              x: 5
            }
          },
          test: [
            {
              'latitude': 2,
              'longitude': -73.99392888,
            },
            {
              'latitude': 1,
              'longitude': -73.99392888,
            }
          ]
        },
        {
          'id': 79,
          'stationName': 'Franklin St & W Broadway',
          'availableDocks': 21,
          'totalDocks': 33,
          'latitude': 1,
          'longitude': -74.00666661,
          'statusValue': 'In Service',
          'statusKey': 1,
          'availableBikes': 12,
          'stAddress1': 'Franklin St & W Broadway',
          'stAddress2': '',
          'city': '',
          'postalCode': '',
          'location': '',
          'altitude': '',
          'testStation': false,
          'lastCommunicationTime': '2018-01-03 10:42:59 AM',
          'landMark': '',
          nest: {
            level: {
              x: 20
            }
          },
          test: [
            {
              'latitude': 5,
              'longitude': -73.99392888,
            },
            {
              'latitude': 7,
              'longitude': -73.99392888,
            }
          ]
        },
        {
          'id': 82,
          'stationName': 'St James Pl & Pearl St',
          'availableDocks': 12,
          'totalDocks': 27,
          'latitude': 40.71117416,
          'longitude': -74.00016545,
          'statusValue': 'In Service',
          'statusKey': 1,
          'availableBikes': 15,
          'stAddress1': 'St James Pl & Pearl St',
          'stAddress2': '',
          'city': '',
          'postalCode': '',
          'location': '',
          'altitude': '',
          'testStation': false,
          'lastCommunicationTime': '2018-01-03 10:40:21 AM',
          'landMark': '',
          nest: {
            level: {
              x: 0
            }
          },
          test: [
            {
              'latitude': 8,
              'longitude': -73.99392888,
            },
            {
              'latitude': 11,
              'longitude': -73.99392888,
            }
          ]
        },
        {
          'id': 83,
          'stationName': 'Atlantic Ave & Fort Greene Pl',
          'availableDocks': 24,
          'totalDocks': 62,
          'latitude': 40.68382604,
          'longitude': -73.97632328,
          'statusValue': 'In Service',
          'statusKey': 1,
          'availableBikes': 37,
          'stAddress1': 'Atlantic Ave & Fort Greene Pl',
          'stAddress2': '',
          'city': '',
          'postalCode': '',
          'location': '',
          'altitude': '',
          'testStation': false,
          'lastCommunicationTime': '2018-01-03 10:42:38 AM',
          'landMark': '',
          nest: {
            level: {
              x: 343434
            }
          },
          test: [
            {
              'latitude': 111,
              'longitude': -73.99392888,
            },
            {
              'latitude': 45,
              'longitude': -73.99392888,
            }
          ]
        },
        {
          'id': 116,
          'stationName': 'W 17 St & 8 Ave',
          'availableDocks': 1,
          'totalDocks': 7,
          'latitude': 1,
          'longitude': -74.00149746,
          'statusValue': 'Not In Service',
          'statusKey': 3,
          'availableBikes': 0,
          'stAddress1': 'W 17 St & 8 Ave',
          'stAddress2': '',
          'city': '',
          'postalCode': '',
          'location': '',
          'altitude': '',
          'testStation': false,
          'lastCommunicationTime': '2017-11-14 08:58:16 AM',
          'landMark': '',
          nest: {
            level: {
              x: -5
            }
          },
          test: [
            {
              'latitude': 67657,
              'longitude': -73.99392888,
            },
            {
              'latitude': 238,
              'longitude': -73.99392888,
            }
          ]
        }
      ], count: 14});
   }, 2000);
    return source;
  }

  /**
   * On data table initStream event callback.
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
   * Responsible for reloading page after updating initial column loading configurations.
   * Store all the updated configurations in the local storage.
   */
  public reloadColumnConfigurations(): void {
    this.dataStorageService.set(DataTableExampleComponent.columnConfigurationStorageKeyName, this.initialColumnConf);
    location.reload();
  }

  public onRowBind(dataRow: DataTableRow<any>): void {
    dataRow.disabled = dataRow.index === 1;
    dataRow.cssClass = 'test-class';
  }

  public onRowSelectedStateChange(selected: any | any[]) {
    console.log(selected);
  }

  public onDynamicRowSpanExtract(row: DataTableRow<any>): number {
    return row.item.test.length;
  }

  public showDataLoaded(row: DataTableRow<any>): boolean {
    if (!row.dataLoaded) {
      setTimeout(() => {
        row.dataLoaded = true;
      }, 2000);
    }

    return row.dataLoaded;
  }

  public onColumnBind(column: DataTableColumnComponent): void {
    if (column.field === 'stationName') {
      column.visible = false;
    }
  }

  public onFilter(item: any, field: string, filterValue: any): boolean {
    console.log('filter ', filterValue);
    return true;
  }
}
