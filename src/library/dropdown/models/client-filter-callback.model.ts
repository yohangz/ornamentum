import {DropdownItem} from './dropdown-item.model';

/**
 * Client filter callback.
 * @param {DropdownItem} option - Target dropdown item.
 * @param {string} filterText - Filter text.
 * @return {boolean} - Filter state.
 */
export type ClientFilterCallback = (option: DropdownItem, filterText: string) => boolean;
