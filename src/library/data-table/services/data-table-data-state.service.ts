import { Injectable } from '@angular/core';
import { DataRow } from '../models/data-row.model';
import { GroupFieldExtractorCallback } from '../models/group-field-extractor-callback.model';

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

  public onGroupFieldExtract: GroupFieldExtractorCallback = (() => []);

  public get showNoDataOverlay(): boolean {
    return !this.dataRows.length && !this.dataLoading;
  }
}
