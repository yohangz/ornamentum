import { Inject, Injectable, InjectionToken } from '@angular/core';

import get from 'lodash.get';

import { DropdownConfig } from '../models/dropdown-config.model';
import { DropdownTranslations } from '../models/dropdown-translations.model';
import { DropdownMenuPosition } from '../models/dropdown-menu-position.enum';
import { DataTableConfig } from '../../data-table/models/data-table-config.model';

export const DROPDOWN_CONFIG = new InjectionToken<DataTableConfig>('dropdownConfig');

/**
 * This service class hold all the global configurations of dropdown which can be overridden while importing the module.
 * Used to manage dropdown base configuration state.
 */
@Injectable()
export class DropdownConfigService implements DropdownConfig {
  public baseTranslations: DropdownTranslations = {
    noDataMessage: 'No Results Available',
    filterPlaceholder: 'Search',
    selectAllPlaceholder: 'Select All',
    selectedItemWrapPlaceholder: 'Items',
    selectPlaceholder: 'Select'
  };

  public selectTrackBy = 'key';
  public displayTrackBy = 'value';
  public disabledTrackBy = 'disabled';
  public menuPosition = DropdownMenuPosition.BOTTOM_LEFT;
  public multiSelectable = false;
  public filterable = false;
  public filterDebounce = true;
  public filterDebounceTime = 500;
  public showSelectAll = false;
  public groupByField = undefined;
  public wrapDisplaySelectLimit = undefined;
  public showSelectedOptionRemoveButton = false;
  public showClearSelectionButton = false;
  public menuWidth = 320;
  public menuHeight = 250;
  public loadOnScroll = false;
  public loadViewDistance = 1;
  public limit = 30;
  public loadDataOnInit = true;
  public closeMenuOnSelect = false;
  public showOptionSelectCheckbox = true;
  public triggerSelectChangeOncePerSelectAll = false;
  public multiSelectOptionMaxWidth = 135;

  constructor(@Inject(DROPDOWN_CONFIG) private dropdownConfig: DropdownConfig) {
    if (dropdownConfig) {
      Object.assign(<any>this, dropdownConfig);
    }
  }

  /**
   * Set dropdown translations.
   * @param {DropdownTranslations} value - Dropdown translations object.
   */
  public set translations(value: DropdownTranslations) {
    this.baseTranslations = {...this.baseTranslations, ...value};
  }

  /**
   * Get dropdown translations.
   * @return {DropdownTranslations} - Dropdown translations.
   */
  public get translations(): DropdownTranslations {
    return this.baseTranslations;
  }

  /**
   * Get display text from source item.
   * @param {any} item - Source item object.
   * @return {string} - Display text.
   */
  public getDisplayText(item: any): string {
    return get(item, this.displayTrackBy);
  }
}
