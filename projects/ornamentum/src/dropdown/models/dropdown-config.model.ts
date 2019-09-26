import { DropdownTranslations } from './dropdown-translations.model';

import { DropdownSelectMode } from './dropdown-select-mode.model';
import { ViewPosition } from '../../utility/models/view-position.model';

/**
 * Dropdown list base configuration.
 */
export interface DropdownConfig {
  /**
   * Base translation data object. Used to localize table static label text.
   */
  baseTranslations?: DropdownTranslations;

  /**
   * Select option track field path which is used to uniquely identify options for selection tracking.
   * This field support object paths expressions 'root[0].nest'.
   */
  selectTrackBy?: string;

  /**
   * Display value track field path which is used to extract dropdown option display value.
   * This field support object paths expressions 'root[0].nest'.
   */
  displayTrackBy?: string;

  /**
   * Option disable state field path which is used to disabled state dropdown options.
   * This field support object paths expressions 'root[0].nest'.
   */
  disabledTrackBy?: string;

  /**
   * Popup options menu display position relative to dropdown component.
   * Support 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' values.
   */
  menuPosition?: ViewPosition;

  /**
   * Option select mode.
   * - 'multi' : Support selecting multiple options.
   * - 'single' : Support selecting a single option from options collection.
   * - 'single-toggle' : Support selecting a single option from options collection. Selection can not be removed but
   * only toggled by tapping on another option.
   */
  selectMode?: DropdownSelectMode;

  /**
   * Show dropdown option search filter text-box if true.
   */
  filterable?: boolean;

  /**
   * Time based filter debounce to optimize performance and avoid request flooding by reducing the filter
   * request frequency if true. Applicable only when dropdown filterable state is enabled.
   */
  filterDebounce?: boolean;

  /**
   * Filter debounce time in milliseconds. Applicable only when searchDebounce is true
   */
  filterDebounceTime?: number;

  /**
   * Options group field path which is used to group the dropdown options.
   * This field support object paths expressions 'root[0].nest'.
   */
  groupByField?: string;

  /**
   * Wrap selected options in dropdown view and show the number of options selected instead when
   * limit is met or exceeded. Applicable only when multi select mode is enabled.
   */
  wrapDisplaySelectLimit?: number;

  /**
   * Show selected option remove button if true.
   * Applicable only when multi select mode ios enabled.
   */
  showSelectedOptionRemoveButton?: boolean;

  /**
   * Show all select options clear button if true.
   * Applicable only when multi select mode ios enabled.
   */
  showClearSelectionButton?: boolean;

  /**
   * Options menu width in pixels.
   */
  menuWidth?: number;

  /**
   * Options menu height in pixels.
   */
  menuHeight?: number;

  /**
   * Set infinite scrollable state to load data on demand with scroll motion. Dropdown data fetch call is
   * initiated with limit and offset when user scroll to bottom hence loading the full data set on init.
   */
  loadOnScroll?: boolean;

  /**
   * View height distance ratio to trigger data fetch on scroll.
   * Higher ratio will will increase the scroll sensitivity.
   */
  loadViewDistanceRatio?: number;

  /**
   * Number of options to fetch on scroll to bottom action when load on scroll mode is enabled.
   */
  limit?: number;

  /**
   * Load data on component initialize if true.
   */
  loadDataOnInit?: boolean;

  /**
   * Close dropdown menu on option select if true.
   */
  closeMenuOnSelect?: boolean;

  /**
   * Show dropdown option select checkbox if true.
   */
  showOptionSelectCheckbox?: boolean;

  /**
   * Multi select option selected item maximum width. Apply ellipsis when selected option display text exceed the max width.
   */
  multiSelectOptionMaxWidth?: number;

  /**
   * Set first dropdown option selected on data fetch if true.
   */
  setFirstOptionSelected?: boolean;

  /**
   * Trigger select change event on init if true. Can be used to enable selectedOptions or selectedOption associated change trigger.
   */
  triggerSelectChangeOnInit?: boolean;

  /**
   * Trigger select change on explicit model update if true. Applicable only when form binding is used.
   */
  triggerSelectChangeOnModelUpdate?: boolean;

  /**
   * Trigger select change on first option select change if true. Applicable only when setFirstOptionSelected is true.
   */
  triggerSelectChangeOnFirstOptionSelect?: boolean;

  /**
   * Dynamically calculate dropdown view dimensions relative to dropdown button width. menuWith and menuHeight values are ignored when true.
   */
  dynamicDimensionCalculation?: boolean;

  /**
   * Dynamic dropdown options view dimensions calculation width ratio relative to dropdown selector.
   */
  dynamicWidthRatio?: number;

  /**
   * Dynamic dropdown options view dimensions calculation height ratio relative to dropdown selector.
   */
  dynamicHeightRatio?: number;

  /**
   * Relative parent element to render dropdown view container.
   */
  relativeParentElement: HTMLElement;
}
