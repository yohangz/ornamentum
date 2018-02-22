import { EventEmitter, Injectable } from '@angular/core';

import { HeaderClickEventArgs } from '../models/header-click-event-args.model';
import { DataRow } from '../models/data-row.model';
import { RowClickEventArgs } from '../models/row-click-event-args.model';
import { DoubleClickEventArgs } from '../models/double-click-event-args.model';
import { CellBindEventArgs } from '../models/cell-bind-event-args.model';
import { CellClickEventArgs } from '../models/cell-click-event-args.model';
import { DataTableComponent } from '../components/data-table/data-table.component';
import { DataTableParams } from '../models/data-table-params.model';

@Injectable()
export class DataTableEventStateService {
  public allRowSelectChangeStream = new EventEmitter<boolean>();
  public dataFetchStream = new EventEmitter<boolean>();
  public headerClickStream = new EventEmitter<HeaderClickEventArgs>();
  public rowBindStream = new EventEmitter<DataRow>();
  public rowClickStream = new EventEmitter<RowClickEventArgs>();
  public rowDoubleClickStream = new EventEmitter<DoubleClickEventArgs>();
  public rowSelectChangeStream = new EventEmitter<any|any[]>();
  public cellBindStream = new EventEmitter<CellBindEventArgs>();
  public cellClickStream = new EventEmitter<CellClickEventArgs>();
  public initStream = new EventEmitter<DataTableComponent>();
  public dataBindStream = new EventEmitter<DataTableParams>();
  public dataBoundStream = new EventEmitter<void>();
}
