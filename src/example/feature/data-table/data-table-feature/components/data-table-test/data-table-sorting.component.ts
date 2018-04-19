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
} from '../../../../../../library/index';

import { Observable } from 'rxjs/Observable';

import { DataStorageService } from '../../services/data-storage.service';

import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/timeout';
import { Subject } from 'rxjs/Subject';
import { sampleData } from '../../data/data-table-example';

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
  selector: 'app-data-table-filtering-component',
  templateUrl: './data-table-filtering.component.html',
  styleUrls: ['./data-table-filtering.component.scss']
})
export class DataTableFilteringComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public items: Observable<any>;

  constructor() {
    this.items = Observable.of(sampleData);
  }
}
