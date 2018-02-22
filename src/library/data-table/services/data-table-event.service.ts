import { EventEmitter, Injectable } from '@angular/core';
import { HeaderClickEventArgs } from '../models/header-click-event-args.model';
import { DataRow } from '../models/data-row.model';
import { RowClickEventArgs } from '../models/row-click-event-args.model';
import { DoubleClickEventArgs } from '../models/double-click-event-args.model';

@Injectable()
export class DataTableEventStateService {
  public allRowSelectChangeStream = new EventEmitter<boolean>();
  public dataFetchStream = new EventEmitter<boolean>();
  public headerClickStream = new EventEmitter<HeaderClickEventArgs>();
  // public rowSelectChangeStream = new EventEmitter<void>();
  public rowBind = new EventEmitter<DataRow>();
  public rowClick = new EventEmitter<RowClickEventArgs>();
  public rowDoubleClick = new EventEmitter<DoubleClickEventArgs>();
  public rowSelectChangeStream = new EventEmitter<any|any[]>();
}
