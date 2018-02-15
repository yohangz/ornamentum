import { Inject, Injectable, InjectionToken } from '@angular/core';

import { DataTableTranslations } from '../models/data-tabl-translations.model';
import { DataTableConfig } from '../models/data-table-config.model';
import { StorageMode } from '../models/storage-mode.enum';
import { MenuPosition } from '../../dropdown/models/menu-position.enum';
import { SortOrder } from '../models/sort-order.enum';

export const DATA_TABLE_CONFIG = new InjectionToken<DataTableConfig>('dataTableConfig');

/**
 * This service class hold all the global configurations of grid which can be overridden while importing the module.
 */
@Injectable()
export class DataTableConfigService implements DataTableConfig {
  // Table base config
  public persistTableState = false;
  public storageMode = StorageMode.SESSION;
  public multiColumnSortable = false;
  public showHeader = false;
  public title = '';
  public minHeight = undefined;
  public minWidth = undefined;
  public contentHeight = undefined;
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

  // Table column config
  public sortable = false;
  public sortOrder = SortOrder.NONE;
  public filterable = false;
  public filterPlaceholder = '';
  public columnResizable = false;
  public columnVisible = true;
  public showDropdownFilter = false;

  // Column dropdown filter options
  public dropdownFilterMenuPosition = MenuPosition.BOTTOM_LEFT;
  public dropdownFilterMultiSelectable = true;
  public dropdownFilterSearchable = true;
  public dropdownFilterSearchDebounceTime = 500;
  public dropdownFilterSearchDebounce = true;
  public dropdownFilterShowSelectAll = true;
  public dropdownFilterWrapDisplaySelectLimit = 1;
  public dropdownFilterGroupByField = undefined;
  public dropdownFilterTriggerChangeOncePerSelectAll = true;
  public dropdownFilterShowSelectedOptionRemoveButton = false;
  public dropdownFilterShowClearSelectionButton = false;
  public dropdownFilterMenuWidth = 320;
  public dropdownFilterMenuHeight = 250;

  constructor(@Inject(DATA_TABLE_CONFIG) private dataTableConfig: DataTableConfig) {
      if (dataTableConfig) {
        Object.assign(<any>this, dataTableConfig);
      }
  }
}
