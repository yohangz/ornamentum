import { Inject, Injectable, InjectionToken } from '@angular/core';

import { DataTableTranslations } from '../models/data-table.model';
import { DataTableConfig } from '../models/data-table-config.model';
import { StorageMode } from '../models/data-table-storage-mode.enum';

export const DATA_TABLE_CONFIG = new InjectionToken<DataTableConfig>('dataTableConfig');

/**
 * This service class hold all the global configurations of grid which can be overridden while importing the module.
 */
@Injectable()
export class DataTableConfigService implements DataTableConfig {
  public persistTableState = false;
  public storageMode = StorageMode.SESSION;
  public multiColumnSortable = false;
  public showHeader = false;
  public title = '';
  public minHeight: string | number = undefined;
  public minWidth: string | number = undefined;
  public contentHeight:  string | number = undefined;
  public pageable = false;
  public showIndexColumn = false;
  public indexColumnTitle = '#';
  public rowSelectable = false;
  public multiRowSelectable = false;
  public showSubstituteRows = false;
  public expandableRows = false;
  public selectOnRowClick = false;
  public expandOnRowClick = false;
  public autoFetch = true;
  public showLoadingSpinner = false;
  public selectTrackBy = 'id';
  public filterDebounceTime = 500;
  public filterDebounce = true;
  public showRefreshButton = false;
  public showColumnSelector = false;
  public expanderColumnWidth: string | number = 30;
  public indexColumnWidth: string | number = 30;
  public selectionColumnWidth: string | number = 30;
  public relativeParentElement = undefined;
  public offset = 0;
  public limit = 10;
  public translations: DataTableTranslations = {
    expandColumn: 'expand',
    indexColumn: 'index',
    noDataMessageHeader: 'Whoops!',
    noDataMessageBody: 'No data to display. Added data will appear here.',
    paginationLimit: 'Limit',
    paginationRange: 'Results',
    selectColumn: 'select'
  };

  constructor(@Inject(DATA_TABLE_CONFIG) private dataTableConfig: DataTableConfig) {
      if (dataTableConfig) {
        Object.assign(this, dataTableConfig);
      }
  }
}
