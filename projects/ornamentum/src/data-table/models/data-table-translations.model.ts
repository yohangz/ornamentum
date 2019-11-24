import { DropdownTranslations } from '../../dropdown/models/dropdown-translations.model';

/**
 * Data table translations model model.
 */
export interface DataTableTranslations {
  /**
   * Pagination.
   */
  pagination?: {
    limit?: string;
    rangeKey?: string;
    rangeSeparator?: string;
    firstTooltip?: string;
    previousTooltip?: string;
    nextTooltip?: string;
    lastTooltip?: string;
  };

  /**
   * No data message body.
   */
  noDataMessage?: {
    body?: string;
    header?: string;
  };

  /**
   * Column selector.
   */
  columnSelector?: {
    header?: string
  };

  /**
   * Dropdown filter translations.
   */
  dropdownFilter?: DropdownTranslations;
}
