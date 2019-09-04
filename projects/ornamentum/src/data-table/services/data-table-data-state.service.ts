import { Injectable } from '@angular/core';

import startCase from 'lodash/startCase';

import { DataTableRow } from '../models/data-table-row.model';
import { DataTableDynamicRowSpanExtractorCallback } from '../models/data-table-group-field-extractor-callback.model';
import { DataTableFilterValueExtractCallback } from '../models/data-table-filter-value-extract-callback.model';
import { DataTableDataBindCallback } from '../models/data-table-data-bind-callback.model';

/**
 * Data table state manager service; Manage current data table state snapshot
 */
@Injectable()
export class DataTableDataStateService {
  public id: string;
  public allRowSelected = false;
  public selectedRow: any;
  public selectedRows: any[] = [];
  public dataRows: DataTableRow<any>[] = [];
  public itemCount: number;
  public tableWidth: number;
  public dataLoading = true;
  public substituteRows: any[] = [];
  public heardReload = false;
  public currentSortPriority = 0;

  public relativeParentElement: HTMLElement;
  public onFilterValueExtract: DataTableFilterValueExtractCallback;
  public onDataBind: DataTableDataBindCallback<any>;
  public onDynamicRowSpanExtract: DataTableDynamicRowSpanExtractorCallback<any> = () => 1;

  /**
   * Get show no data overlay status
   * @return True if no data overlay should be shown
   */
  public get showNoDataOverlay(): boolean {
    return !this.dataRows.length && !this.dataLoading;
  }

  /**
   * Manipulate and returns data table checkbox unique identifier.
   * @param append Respective checkbox common identifier
   * @param index Current iteration
   */
  public getIdName(append: string, index?: number): string {
    if (index > -1) {
      return `${startCase(this.id).split(' ')
        .join('-').toLowerCase()}-${append}-checkbox-${++index}`;
    }

    return `${startCase(this.id).split(' ')
      .join('-').toLowerCase()}-${append}-checkbox`;
  }
}
