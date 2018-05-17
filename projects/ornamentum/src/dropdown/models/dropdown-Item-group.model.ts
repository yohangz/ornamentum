import { DropdownItem } from './dropdown-item.model';

/**
 * Dropdown item group.
 */
export interface DropdownItemGroup {
  /**
   * Group name.
   * @type {string}
   */
  groupName: string;

  /**
   * Group items.
   * @type {DropdownItem[]}
   */
  items: DropdownItem[];
}
