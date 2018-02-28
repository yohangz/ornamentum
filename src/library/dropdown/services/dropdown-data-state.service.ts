import { Injectable } from '@angular/core';

import { DropdownItem } from '../models/dropdown-item.model';
import { DropdownDataBindCallback } from '../models/dropdown-data-bind-callback.model';
import { DropdownItemGroup } from '../models/dropdown-Item-group.model';

import { ComponentLoader } from '../../utility';

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

  public onDataBind: DropdownDataBindCallback;
}
