import { Component } from '@angular/core';

import { get } from 'lodash';

import { DropdownItem } from '../../models/dropdown-item.model';
import { DropdownSelectMode } from '../../models/dropdown-select-mode.enum';

import { DropdownDataStateService } from '../../services/dropdown-data-state.service';
import { DropdownConfigService } from '../../services/dropdown-config.service';
import { DropdownEventStateService } from '../../services/dropdown-event-state.service';


@Component({
  selector: 'ng-dropdown-options',
  templateUrl: './dropdown-options.component.html',
  styleUrls: ['./dropdown-options.component.scss']
})
export class DropdownOptionsComponent {
  public DropdownSelectMode = DropdownSelectMode;

  constructor(public config: DropdownConfigService,
              public dataStateService: DropdownDataStateService,
              private eventStateService: DropdownEventStateService) {
  }

  public getSelectedState(id: any): boolean {
    if (this.config.selectMode === DropdownSelectMode.MULTI) {
      return this.dataStateService.selectedOptions.some((item: any) => {
        return get(item, this.config.selectTrackBy) === id;
      });
    }

    return get(this.dataStateService.selectedOption, this.config.selectTrackBy) === id;
  }

  public toggleOptionSelectedState(option: DropdownItem): void {
    const id = get(option.item, this.config.selectTrackBy);

    switch (this.config.selectMode) {
      case DropdownSelectMode.MULTI: {
        const selectedIndex = this.dataStateService.selectedOptions.findIndex((item: any) => {
          return get(item, this.config.selectTrackBy) === id;
        });

        if (selectedIndex < 0) {
          this.dataStateService.selectedOptions.push(option.item);
        } else {
          this.dataStateService.selectedOptions.splice(selectedIndex, 1);
        }

        this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
        break;
      }
      case DropdownSelectMode.SINGLE_TOGGLE: {
        if (get(this.dataStateService.selectedOption, this.config.selectTrackBy) === id) {
          this.dataStateService.selectedOption = undefined;
        } else {
          this.dataStateService.selectedOption = option.item;
        }

        this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOption);
        break;
      }
      case DropdownSelectMode.SINGLE: {
        const selectedId = get(this.dataStateService.selectedOption, this.config.selectTrackBy);
        this.dataStateService.selectedOption = option.item;

        if (selectedId !== id) {
          this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOption);
        }
        break;
      }
    }

    if (this.config.closeMenuOnSelect) {
      this.dataStateService.componentLoaderRef.hide();
    }
  }
}
