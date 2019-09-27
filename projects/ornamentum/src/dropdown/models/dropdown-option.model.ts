/**
 * Dropdown option model.
 */
export interface DropdownOption {
  /**
   * Option identifier.
   */
  id: any;

  /**
   * Option index.
   */
  index: number;

  /**
   * Option text.
   */
  text: string;

  /**
   * Disabled state.
   */
  disabled: boolean;

  /**
   * Source option data reference.
   */
  option: any;
}
