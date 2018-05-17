import { Injectable } from '@angular/core';

import { DataTableRow } from '../models/data-table-row.model';
import { DataTableDynamicRowSpanExtractorCallback } from '../models/data-table-group-field-extractor-callback.model';
import { DataTableFilterValueExtractCallback } from '../models/data-table-filter-value-extract-callback.model';
import { DataTableDataBindCallback } from '../models/data-table-data-bind-callback.model';

@Injectable()
export class DataTableDataStateService {
  public allRowSelected = false;
  public selectedRow: any;
  public selectedRows: any[] = [];
  public dataRows: DataTableRow<any>[] = [];
  public itemCount: number;
  public tableWidth: number;
  public dataLoading = true;
  public substituteRows: any[] = [];
  public heardReload = false;

  public onDynamicRowSpanExtract: DataTableDynamicRowSpanExtractorCallback<any> = (() => 1);
  public onFilterValueExtract: DataTableFilterValueExtractCallback;
  public onDataBind: DataTableDataBindCallback;

  public get showNoDataOverlay(): boolean {
    return !this.dataRows.length && !this.dataLoading;
  }
}
