import { DropdownTranslations } from './dropdown-translations.model';

import { DropdownSelectMode } from './dropdown-select-mode.model';
import { ViewPosition } from '../../utility/models/view-position.model';

/**
 * Dropdown configuration.
 */
export interface DropdownConfig {
  /**
   * Dropdown base display text translations.
   * @type {DropdownTranslations}
   */
  baseTranslations?: DropdownTranslations;

  /**
   * Name of the attribute used for selection tracking.
   * @type {string}
   */
  selectTrackBy?: string;

  /**
   * Name of the attribute used to show the selected item's display text.
   * @type {string}
   */
  displayTrackBy?: string;

  /**
   * Name of the attribute used to disable the selection of dropdown item.
   * @type {string}
   */
  disabledTrackBy?: string;

  /**
   * Menu position.
   * @type {ViewPosition}
   */
  menuPosition?: ViewPosition;

  /**
   * Dropdown option select mode.
   * @type {DropdownSelectMode}
   */
  selectMode?: DropdownSelectMode;

  /**
   * Filterable if true.
   * Show dropdown search input.
   * @type {boolean}
   */
  filterable?: boolean;

  /**
   * Enable filter debounce with provided searchDebounceTime if true.
   * @type {boolean}
   */
  filterDebounce?: boolean;

  /**
   * Filter debounce time in milliseconds.
   * Applicable only when searchDebounce is true.
   * @type {number}
   */
  filterDebounceTime?: number;

  /**
   * Group by field name in item schema.
   * @type {string}
   */
  groupByField?: string;

  /**
   * Wrap display selected limit.
   * Wrap selected items when limit exceeded.
   * @type {number}
   */
  wrapDisplaySelectLimit?: number;

  /**
   * Show selected option remove button if true.
   * @type {boolean}
   */
  showSelectedOptionRemoveButton?: boolean;

  /**
   * Show all select options clear button if true.
   * @type {boolean}
   */
  showClearSelectionButton?: boolean;

  /**
   * Menu width in pixels.
   * @type {number}
   */
  menuWidth?: number;

  /**
   * Menu height in pixels.
   * @type {number}
   */
  menuHeight?: number;

  /**
   * Dropdown data loading on scrolling (on demand data fetch) if true.
   * @type {boolean}
   */
  loadOnScroll?: boolean;

  /**
   * Distance in pixels from bottom which needs to trigger additional data loading functionality on scroll.
   * @type {number}
   */
  loadViewDistance?: number;

  /**
   * Dropdown items to fetch on a single load when loadOnScroll is true.
   * @type {number}
   */
  limit?: number;

  /**
   * Load data on component initialize.
   * @type {boolean}
   */
  loadDataOnInit?: boolean;

  /**
   * Close dropdown menu on option select.
   * @type {boolean}
   */
  closeMenuOnSelect?: boolean;

  /**
   * Show dropdown option select checkbox if true.
   * @type {boolean}
   */
  showOptionSelectCheckbox?: boolean;

  /**
   * Multi select option maximum width.
   * @type {boolean}
   */
  multiSelectOptionMaxWidth?: number;

  /**
   * Set first dropdown option selected on data fetch if true.
   * @type {boolean}
   */
  setFirstOptionSelected?: boolean;

  /**
   * Trigger select change event on init if true.
   * Can be used to enable selectedItems or selectedItem associated change trigger.
   * @type {boolean}
   */
  triggerSelectChangeOnInit?: boolean;

  /**
   * Trigger select change on explicit model update if true.
   * Applicable only when form binding is used.
   * @type {boolean}
   */
  triggerSelectChangeOnModelUpdate?: boolean;

  /**
   * Trigger select change on first option select change if true.
   * Applicable only when setFirstOptionSelected is true.
   * @type {boolean}
   */
  triggerSelectChangeOnFirstOptionSelect?: boolean;

  /**
   * Dynamically calculate dropdown view dimensions relative to dropdown button width.
   * menuWith and menuHeight values are ignored when true.
   * @type {boolean}
   */
  dynamicDimensionCalculation?: boolean;

  /**
   * Dynamic dropdown view dimensions calculation width ratio.
   * @type {number}
   */
  dynamicWidthRatio?: number;

  /**
   * Dynamic dropdown view dimensions calculation height ratio.
   * @type {number}
   */
  dynamicHeightRatio?: number;
}
