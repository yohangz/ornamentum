import { Inject, Injectable, InjectionToken } from '@angular/core';

import { get } from '../../utility/services/object-utility.class';

import { DropdownConfig } from '../models/dropdown-config.model';
import { DropdownTranslations } from '../models/dropdown-translations.model';
import { DataTableConfig } from '../../data-table/models/data-table-config.model';

import { DropdownSelectMode } from '../models/dropdown-select-mode.model';
import { ViewPosition } from '../../utility/models/view-position.model';

export const DROPDOWN_CONFIG = new InjectionToken<DataTableConfig>('dropdownConfig');

/**
 * Dropdown config service. Holds all the global configurations of dropdown which can be overridden while importing the module.
 * Used to manage dropdown base configuration state.
 */
@Injectable()
export class DropdownConfigService implements DropdownConfig {
  public baseTranslations: DropdownTranslations = {
    noDataMessage: 'No Results Available',
    filterPlaceholder: 'Search',
    selectedOptionWrapPlaceholder: 'Options',
    selectPlaceholder: 'Select'
  };

  public selectTrackBy = 'key';
  public displayTrackBy = 'value';
  public disabledTrackBy = 'disabled';
  public menuPosition: ViewPosition = 'bottom-left';
  public selectMode: DropdownSelectMode = 'single-toggle';
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
  public loadViewDistanceRatio = 1;
  public limit = 15;
  public loadDataOnInit = true;
  public closeMenuOnSelect = false;
  public showOptionSelectCheckbox = false;
  public showOptionIndex = false;
  public showOptionTrackBy = false;
  public multiSelectOptionMaxWidth = 135;
  public setFirstOptionSelected = false;
  public triggerSelectChangeOnInit = false;
  public triggerSelectChangeOnModelUpdate = false;
  public triggerSelectChangeOnFirstOptionSelect = false;
  public dynamicDimensionCalculation = false;
  public dynamicWidthRatio = 1;
  public dynamicHeightRatio = 0.5;
  public relativeParentElement = undefined;

  constructor(@Inject(DROPDOWN_CONFIG) private dropdownConfig: DropdownConfig) {
    if (dropdownConfig) {
      Object.assign(this, dropdownConfig);
    }
  }

  /**
   * Set dropdown translations.
   * @param value Dropdown translations object.
   */
  public set translations(value: DropdownTranslations) {
    this.baseTranslations = { ...this.baseTranslations, ...value };
  }

  /**
   * Get dropdown translations.
   * @return Dropdown translations.
   */
  public get translations(): DropdownTranslations {
    return this.baseTranslations;
  }

  /**
   * Get display text by source option.
   * @param option Source option object.
   * @return Display text.
   */
  public getDisplayText(option: any): string {
    return get(option, this.displayTrackBy);
  }
}
