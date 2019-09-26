import { Injectable, TemplateRef } from '@angular/core';

import { DropdownOption } from '../models/dropdown-option.model';
import { DropdownDataBindCallback } from '../models/dropdown-data-bind-callback.model';
import { DropdownOptionGroup } from '../models/dropdown-option-group.model';
import { ComponentLoader } from '../../utility/utility.module';

/**
 * Dropdown data state service; Manage dropdown state data.
 */
@Injectable()
export class DropdownDataStateService {
  public id: string;
  public dataLoading = false;
  public selectedOption: any;
  public selectedOptions: any[] = [];
  public offset = 0;
  public totalOptionCount: number;
  public currentOptionCount = 0;
  public dropdownOptions: DropdownOption[] = [];
  public dropdownOptionGroups: DropdownOptionGroup[] = [];
  public filterText = '';
  public disabled = false;
  public componentLoaderRef: ComponentLoader<any>;
  public dropdownOptionTemplate: TemplateRef<any>;
  public dropdownOptionGroupHeaderTemplate: TemplateRef<any>;

  public onDataBind: DropdownDataBindCallback<any>;

  /**
   * Get dropdown option unique id.
   * @param append Target identifier.
   * @param index Target index.
   */
  public getUniqueId(append: string, index: number): string {
    return `${this.id}-chk-${append}-${index}`;
  }
}
