import { Injectable } from '@angular/core';
import { DropdownItem } from '../models/dropdown-item.model';
import { DropdownDataBindCallback } from '../models/dropdown-data-bind-callback.model';
import { DropdownItemGroup } from '../models/dropdown-Item-group.model';

@Injectable()
export class DropdownDataStateService {
  public allOptionsSelected = false;
  public dataLoading = false;
  public selectedOption: any;
  public selectedOptions: any[] = [];
  public offset = 0;
  public totalOptionCount: number;
  public currentItemCount: number;
  public dropdownItems: DropdownItem[] = [];
  public dropdownItemGroups: DropdownItemGroup[] = [];
  public filterText = '';
  public disabled = false;

  public onDataBind: DropdownDataBindCallback;
}
