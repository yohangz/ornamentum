/**
 * Dropdown option
 */
export interface DropdownOption {
  /**
   * Option identifier
   */
  id: any;

  /**
   * Option text
   */
  text: string;

  /**
   * Disabled state
   */
  disabled: boolean;

  /**
   * Source option data reference
   */
  option: any;
}
