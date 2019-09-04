import { Injectable, TemplateRef } from '@angular/core';

import startCase from 'lodash/startCase';

import { DropdownItem } from '../models/dropdown-item.model';
import { DropdownDataBindCallback } from '../models/dropdown-data-bind-callback.model';
import { DropdownItemGroup } from '../models/dropdown-Item-group.model';
import { ComponentLoader } from '../../utility/utility.module';

/**
 * Dropdown data state service; Manage dropdown state data
 */
@Injectable()
export class DropdownDataStateService {
  public id: string;
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

  public onDataBind: DropdownDataBindCallback<any>;

  /**
   * Manipulate and returns data table checkbox unique identifier.
   * @param append Respective checkbox common identifier
   * @param index Current iteration
   */
  public getIdName(append: string, index: number): string {
      if (index > -1) {
        return `${startCase(this.id).split(' ')
          .join('-').toLowerCase()}-${append}-checkbox-${++index}`;
      }

      return `${startCase(this.id).split(' ')
        .join('-').toLowerCase()}-${append}-checkbox`;
  }
}
