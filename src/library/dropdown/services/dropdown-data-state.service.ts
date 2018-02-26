import { Injectable } from '@angular/core';

import { DropdownItem } from '../models/dropdown-item.model';
import { DropdownDataBindCallback } from '../models/dropdown-data-bind-callback.model';
import { DropdownItemGroup } from '../models/dropdown-Item-group.model';

import { DropdownConfigService } from './dropdown-config.service';

/**
 * Dropdown data state service.
 * Manage dropdown state data.
 */
@Injectable()
export class DropdownDataStateService {
  public allOptionsSelected = false;
  public dataLoading = false;
  public selectedOption: any;
  public selectedOptions: any[] = [];
  public offset = 0;
  public totalOptionCount: number;
  public currentItemCount = 0;
  public dropdownItems: DropdownItem[] = [];
  public dropdownItemGroups: DropdownItemGroup[] = [];
  public filterText = '';
  public disabled = false;

  public onDataBind: DropdownDataBindCallback;

  constructor(private config: DropdownConfigService) {
  }

  /**
   * Set all options selected state.
   * Applicable only when multiSelectable and showSelectAll options are enabled.
   */
  public setAllOptionsSelectedState(): void {
    if (!this.config.multiSelectable || !this.config.showSelectAll) {
      return;
    }

    if (this.currentItemCount === 0) {
      this.allOptionsSelected = false;
      return;
    }

    if (this.config.groupByField) {
      this.allOptionsSelected = this.dropdownItemGroups
        .every(group => group.items.every(item => item.selected));
    } else {
      this.allOptionsSelected = this.dropdownItems
        .every(item => item.selected);
    }
  }
}
