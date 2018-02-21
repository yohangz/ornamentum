import { Injectable } from '@angular/core';
import { DataRow } from '../models/data-row.model';

@Injectable()
export class DataTableDataStateService {
  public allRowSelected = false;
  public selectedRow: any;
  public selectedRows: any[] = [];
  public dataRows: DataRow[] = [];
  public itemCount: number;
  public tableWidth: number;
}
