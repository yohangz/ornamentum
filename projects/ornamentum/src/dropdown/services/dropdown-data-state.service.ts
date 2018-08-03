import { Injectable, TemplateRef } from '@angular/core';

import { DropdownItem } from '../models/dropdown-item.model';
import { DropdownDataBindCallback } from '../models/dropdown-data-bind-callback.model';
import { DropdownItemGroup } from '../models/dropdown-Item-group.model';
import { ComponentLoader } from '../../utility/utility.module';

/**
 * Dropdown data state service.
 * Manage dropdown state data.
 */
@Injectable()
export class DropdownDataStateService {
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
  public componentLoaderRef: ComponentLoader<any>;
  public dropdownOptionTemplate: TemplateRef<any>;
  public dropdownOptionGroupHeaderTemplate: TemplateRef<any>;

  public onDataBind: DropdownDataBindCallback;
}
