import { DropdownItem } from './dropdown-item.model';

/**
 * Dropdown item group
 */
export interface DropdownItemGroup {
  /**
   * Group name
   */
  groupName: string;

  /**
   * Group items
   */
  items: DropdownItem[];
}
