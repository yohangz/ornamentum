import { DropdownTranslations } from './dropdown-translations.model';

import { DropdownSelectMode } from './dropdown-select-mode.model';
import { ViewPosition } from '../../utility/models/view-position.model';

/**
 * Dropdown configuration
 */
export interface DropdownConfig {
  /**
   * Base display text translations; Used to localize label default text values
   */
  baseTranslations?: DropdownTranslations;

  /**
   * Name of the attribute used for selection tracking
   */
  selectTrackBy?: string;

  /**
   * Name of the attribute used to show the selected item's display text
   */
  displayTrackBy?: string;

  /**
   * Name of the attribute used to disable the selection of dropdown item
   */
  disabledTrackBy?: string;

  /**
   * Popup options menu display position relative to dropdown component
   */
  menuPosition?: ViewPosition;

  /**
   * Dropdown option select mode
   */
  selectMode?: DropdownSelectMode;

  /**
   * Filterable if true; Show dropdown option search filter text-box
   */
  filterable?: boolean;

  /**
   * Enable filter debounce with provided searchDebounceTime if true
   */
  filterDebounce?: boolean;

  /**
   * Filter debounce time in milliseconds; Applicable only when searchDebounce is true
   */
  filterDebounceTime?: number;

  /**
   * Group by field name in item schema
   */
  groupByField?: string;

  /**
   * Wrap display selected limit; Wrap selected items when limit exceeded
   */
  wrapDisplaySelectLimit?: number;

  /**
   * Show selected option remove button if true
   */
  showSelectedOptionRemoveButton?: boolean;

  /**
   * Show all select options clear button if true
   */
  showClearSelectionButton?: boolean;

  /**
   * Options menu width in pixels
   */
  menuWidth?: number;

  /**
   * Options menu height in pixels
   */
  menuHeight?: number;

  /**
   * Dropdown data loading on scrolling (on demand data fetch) if true
   */
  loadOnScroll?: boolean;

  /**
   * Distance in pixels from bottom which needs to trigger additional data loading functionality on scroll
   */
  loadViewDistance?: number;

  /**
   * Number of options to fetch on a single load when loadOnScroll is true
   */
  limit?: number;

  /**
   * Load data on component initialize if true
   */
  loadDataOnInit?: boolean;

  /**
   * Close dropdown menu on option select if true
   */
  closeMenuOnSelect?: boolean;

  /**
   * Show dropdown option select checkbox if true
   */
  showOptionSelectCheckbox?: boolean;

  /**
   * Multi select option selected item maximum width; Wrap the selected option display text if exceeding the max width
   */
  multiSelectOptionMaxWidth?: number;

  /**
   * Set first dropdown option selected on data fetch if true
   */
  setFirstOptionSelected?: boolean;

  /**
   * Trigger select change event on init if true; Can be used to enable selectedItems or selectedItem associated change trigger
   */
  triggerSelectChangeOnInit?: boolean;

  /**
   * Trigger select change on explicit model update if true; Applicable only when form binding is used
   */
  triggerSelectChangeOnModelUpdate?: boolean;

  /**
   * Trigger select change on first option select change if true; Applicable only when setFirstOptionSelected is true
   */
  triggerSelectChangeOnFirstOptionSelect?: boolean;

  /**
   * Dynamically calculate dropdown view dimensions relative to dropdown button width; menuWith and menuHeight values are ignored when true
   */
  dynamicDimensionCalculation?: boolean;

  /**
   * Dynamic dropdown options view dimensions calculation width ratio relative to dropdown selector
   */
  dynamicWidthRatio?: number;

  /**
   * Dynamic dropdown options view dimensions calculation height ratio relative to dropdown selector
   */
  dynamicHeightRatio?: number;

  /**
   * Relative parent element to render dropdown view container.
   */
  relativeParentElement: HTMLElement;
}
