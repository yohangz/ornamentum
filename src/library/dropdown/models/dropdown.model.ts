import { DropdownComponent } from '../components/dropdown/dropdown.component';

/**
 * Interface representing search dropdown translations.
 * @interface SearchDropdownTranslations.
 */
export interface SearchDropdownTranslations {
  title?: string;
  searchPlaceholder?: string;
  searchEmptyResult?: string;
  selectAll?: string;
  selectedItems?: string;
}

/**
 * Interface representing a dropdown item.
 * @interface DropdownItem.
 */
export interface DropdownItem {
  id: any;
  text: string;
  disabled: boolean;
  data: any;
  filter?: boolean;
}

/**
 * Interface representing a dropdown item group.
 * @interface DropdownItemGroup.
 */
export interface DropdownItemGroup {
  groupName: string;
  items: DropdownItem[];
}

/**
 * Interface representing a dropdown data requesting params.
 * @interface DataRequestParams.
 */
export interface DataRequestParams {
  filter: string;
  offset: number;
  limit: number;
  departmentID?: number;
  categoryID?: number;
}

/**
 * Interface representing a dropdown view property.
 * @interface DropdownViewProperty.
 */
export interface DropdownViewProperty {
  dropdown: DropdownComponent;
}

/**
 * Defines type definition for client filter callback function.
 * @type ClientFilterCallback
 */
export type ClientFilterCallback = (option: DropdownItem, filterText: string) => boolean;
