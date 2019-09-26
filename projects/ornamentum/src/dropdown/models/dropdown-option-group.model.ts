import { DropdownOption } from './dropdown-option.model';

/**
 * Dropdown option group.
 */
export interface DropdownOptionGroup {
  /**
   * Group name.
   */
  groupName: string;

  /**
   * Group options.
   */
  options: DropdownOption[];
}
