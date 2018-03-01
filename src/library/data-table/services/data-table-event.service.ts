import { EventEmitter, Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs/ReplaySubject';

import { DataTableHeaderClickEventArgs } from '../models/data-table-header-click-event-args.model';
import { DataTableRow } from '../models/data-table-row.model';
import { DataTableRowClickEventArgs } from '../models/data-table-row-click-event-args.model';
import { DataTableDoubleClickEventArgs } from '../models/data-table-double-click-event-args.model';
import { DataTableCellBindEventArgs } from '../models/data-table-cell-bind-event-args.model';
import { DataTableCellClickEventArgs } from '../models/data-table-cell-click-event-args.model';

import { DataTableComponent } from '../components/data-table/data-table.component';

@Injectable()
export class DataTableEventStateService {
  public allRowSelectChangeStream = new EventEmitter<boolean>();
  public dataFetchStream = new EventEmitter<boolean>();
  public headerClickStream = new EventEmitter<DataTableHeaderClickEventArgs>();
  public rowBindStream = new EventEmitter<DataTableRow<any>>();
  public rowClickStream = new EventEmitter<DataTableRowClickEventArgs<any>>();
  public rowDoubleClickStream = new EventEmitter<DataTableDoubleClickEventArgs<any>>();
  public rowSelectChangeStream = new EventEmitter<any|any[]>();
  public cellBindStream = new EventEmitter<DataTableCellBindEventArgs<any>>();
  public cellClickStream = new EventEmitter<DataTableCellClickEventArgs<any>>();
  public initStream = new EventEmitter<DataTableComponent>();
  public dataBoundStream = new EventEmitter<void>();
  public fetchFilterOptionsStream = new ReplaySubject(1);
}
