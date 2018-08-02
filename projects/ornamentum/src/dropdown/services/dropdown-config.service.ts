import { Inject, Injectable, InjectionToken } from '@angular/core';

import get from 'lodash-es/get';

import { DropdownConfig } from '../models/dropdown-config.model';
import { DataTableConfig } from '../../data-table/models/data-table-config.model';
import { DropdownTranslations } from '../models/dropdown-translations.model';

import { DropdownMenuPosition } from '../models/dropdown-menu-position.enum';
import { DropdownSelectMode } from '../models/dropdown-select-mode.enum';

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
    selectedItemWrapPlaceholder: 'Items',
    selectPlaceholder: 'Select'
  };

  public selectTrackBy = 'key';
  public displayTrackBy = 'value';
  public disabledTrackBy = 'disabled';
  public menuPosition = DropdownMenuPosition.BOTTOM_LEFT;
  public selectMode = DropdownSelectMode.SINGLE_TOGGLE;
  public filterable = false;
  public filterDebounce = true;
  public filterDebounceTime = 500;
  public groupByField: string = undefined;
  public wrapDisplaySelectLimit: number = undefined;
  public showSelectedOptionRemoveButton = false;
  public showClearSelectionButton = false;
  public menuWidth = 320;
  public menuHeight = 250;
  public loadOnScroll = false;
  public loadViewDistance = 1;
  public limit = 30;
  public loadDataOnInit = true;
  public closeMenuOnSelect = false;
  public showOptionSelectCheckbox = false;
  public multiSelectOptionMaxWidth = 135;
  public setFirstOptionSelected = false;
  public triggerSelectChangeOnInit = false;
  public triggerSelectChangeOnModelUpdate = false;
  public triggerSelectChangeOnFirstOptionSelect = false;

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
