/**
 * Dropdown item
 */
export interface DropdownItem {
  /**
   * Item identifier
   */
  id: any;

  /**
   * Item text
   */
  text: string;

  /**
   * Disabled state
   */
  disabled: boolean;

  /**
   * Source item data reference
   */
  item: any;
}
