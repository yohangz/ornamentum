import { Inject, Injectable, InjectionToken } from '@angular/core';

import { DropdownConfig } from '../models/dropdown-config.model';
import { DropdownTranslations } from '../models/dropdown-translations.model';
import { MenuPosition } from '../models/menu-position.enum';
import { DataTableConfig } from '../../data-table/models/data-table-config.model';

export const DROPDOWN_CONFIG = new InjectionToken<DataTableConfig>('dropdownConfig');

/**
 * This service class hold all the global configurations of dropdown which can be overridden while importing the module.
 */
@Injectable()
export class DropdownConfigService implements DropdownConfig {
  public translations: DropdownTranslations = {
    searchEmptyResult: 'No Results Available',
    searchPlaceholder: 'Search',
    selectAllPlaceholder: 'Select All',
    selectedItemWrapPlaceholder: 'Items',
    selectPlaceholder: 'Select'
  };

  public selectTrackBy = 'key';
  public displayTrackBy = 'value';
  public dataTrackBy = 'data';
  public disabledTrackBy = 'disabled';
  public menuPosition = MenuPosition.BOTTOM_LEFT;
  public multiSelectable = false;
  public flterable = false;
  public filterDebounce = true;
  public filterDebounceTime = 500;
  public showSelectAll = false;
  public groupByField = undefined;
  public wrapDisplaySelectLimit = 1;
  public triggerSelectChangeOnInit = false;
  public triggerChangeOncePerSelectAll = true;
  public showSelectedOptionRemove = false;
  public menuWidth = 320;
  public menuHeight = 250;
  public loadOnScroll = false;
  public loadViewDistance = 1;
  public limit = 30;
  public loadDataOnInit = true;

  constructor(@Inject(DROPDOWN_CONFIG) private dropdownConfig: DropdownConfig) {
    if (dropdownConfig) {
      Object.assign(<any>this, dropdownConfig);
    }
  }
}
