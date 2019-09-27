import { DropdownOption } from './dropdown-option.model';

/**
 * Dropdown option group model.
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
