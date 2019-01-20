import { Inject, Injectable, InjectionToken } from '@angular/core';

import { DataTableTranslations } from '../models/data-table-translations.model';
import { DataTableConfig } from '../models/data-table-config.model';

import { DataTableStorageMode } from '../models/data-table-storage-mode.model';
import { DataTableSortOrder } from '../models/data-table-sort-order.model';
import { DataTableSelectMode } from '../models/data-table-select-mode.model';
import { DropdownSelectMode } from '../../dropdown/dropdown.module';
import { ViewPosition } from '../../utility/models/view-position.model';

export const DATA_TABLE_CONFIG = new InjectionToken<DataTableConfig>('dataTableConfig');

/**
 * Data table config service; Manage all the global configurations of grid which can be overridden while importing the module
 */
@Injectable()
export class DataTableConfigService implements DataTableConfig {
  // Table base config
  public persistTableState = false;
  public storageMode: DataTableStorageMode = 'session';
  public multiColumnSortable = false;
  public showHeader = false;
  public title = '';
  public width = undefined;
  public minHeight = undefined;
  public minWidth = undefined;
  public contentHeight = undefined;
  public pageable = false;
  public showIndexColumn = false;
  public indexColumnTitle = '#';
  public rowSelectable = false;
  public selectMode: DataTableSelectMode = 'single';
  public showRowSelectCheckbox = false;
  public showRowSelectAllCheckbox = false;
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
  public showRowExpandLoadingSpinner = false;
  public offset = 0;
  public limit = 10;
  public maxLimit = 100;
  public stateKeyPrefix = 'grid_state_';
  public baseTranslations: DataTableTranslations = {
    noDataMessageHeader: 'Whoops!',
    noDataMessageBody: 'No data to display. Added data will appear here.',
    paginationLimit: 'Limit',
    paginationRange: 'Results'
  };

  // Table column config
  public sortable = false;
  public sortOrder: DataTableSortOrder = '';
  public filterable = false;
  public filterPlaceholder = '';
  public columnResizable = false;
  public columnVisible = true;
  public showDropdownFilter = false;
  public showFilterClearButton = true;

  // Column dropdown filter options
  public dropdownFilterMenuPosition: ViewPosition = 'bottom-left';
  public dropdownFilterSelectMode: DropdownSelectMode = 'multi';
  public dropdownFilterSearchable = true;
  public dropdownFilterSearchDebounceTime = 500;
  public dropdownFilterSearchDebounce = true;
  public dropdownFilterWrapDisplaySelectLimit = 1;
  public dropdownFilterGroupByField = undefined;
  public dropdownFilterShowSelectedOptionRemoveButton = false;
  public dropdownFilterShowClearSelectionButton = true;
  public dropdownFilterMenuWidth = 320;
  public dropdownFilterMenuHeight = 250;
  public dropdownFilterMultiSelectOptionMaxWidth = 135;
  public dropdownFilterCloseMenuOnSelect = true;
  public dropdownFilterDynamicDimensionCalculation = true;
  public dropdownFilterDynamicWidthRatio = 1.25;
  public dropdownFilterDynamicHeightRatio = 1.25;

  constructor(@Inject(DATA_TABLE_CONFIG) private dataTableConfig: DataTableConfig) {
    if (dataTableConfig) {
      Object.assign(<any>this, dataTableConfig);
    }
  }

  public set translations(value: DataTableTranslations) {
    this.baseTranslations = { ...this.baseTranslations, ...value };
  }

  /**
   * Returns translations
   */
  public get translations(): DataTableTranslations {
    return this.baseTranslations;
  }

  /**
   * Get row select checkbox column
   */
  public get showRowSelectCheckboxColumn(): boolean {
    return this.rowSelectable && this.showRowSelectCheckbox;
  }
}
