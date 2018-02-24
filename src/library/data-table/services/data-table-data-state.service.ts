import { Injectable } from '@angular/core';

import { DataRow } from '../models/data-row.model';
import { DynamicRowSpanExtractorCallback } from '../models/group-field-extractor-callback.model';
import { FilterValueExtractCallback } from '../models/filter-value-extract-callback.model';
import { DataBindCallback } from '../models/data-bind-callback.model';

@Injectable()
export class DataTableDataStateService {
  public allRowSelected = false;
  public selectedRow: any;
  public selectedRows: any[] = [];
  public dataRows: DataRow[] = [];
  public itemCount: number;
  public tableWidth: number;
  public dataLoading = true;
  public substituteRows: any[] = [];
  public heardReload = false;

  public onDynamicRowSpanExtract: DynamicRowSpanExtractorCallback = (() => 1);
  public onFilterValueExtract: FilterValueExtractCallback;
  public onDataBind: DataBindCallback;

  public get showNoDataOverlay(): boolean {
    return !this.dataRows.length && !this.dataLoading;
  }
}
