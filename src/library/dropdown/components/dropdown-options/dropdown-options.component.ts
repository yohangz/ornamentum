import { Component, EventEmitter, Output } from '@angular/core';

import { DropdownItem } from '../../models/dropdown-item.model';

import { DropdownDataStateService } from '../../services/dropdown-data-state.service';
import { DropdownConfigService } from '../../services/dropdown-config.service';
import get from 'lodash.get';
import { DropdownEventStateService } from '../../services/dropdown-event-state.service';


@Component({
  selector: 'ng-dropdown-options',
  templateUrl: './dropdown-options.component.html',
  styleUrls: ['./dropdown-options.component.scss']
})
export class DropdownOptionsComponent {
  constructor(public config: DropdownConfigService,
              public dataStateService: DropdownDataStateService,
              private eventStateService: DropdownEventStateService) {
  }

  public getSelectedState(id: any): boolean {
    if (this.config.multiSelectable) {
      return this.dataStateService.selectedOptions.some((item: any) => {
        return get(item, this.config.selectTrackBy) === id;
      });
    }

    return get(this.dataStateService.selectedOption, this.config.selectTrackBy) === id;
  }

  public toggleOptionSelectedState(option: DropdownItem): void {
    const id = get(option.item, this.config.selectTrackBy);
    if (this.config.multiSelectable) {
      const selectedIndex = this.dataStateService.selectedOptions.findIndex((item: any) => {
        return get(item, this.config.selectTrackBy) === id;
      });

      if (selectedIndex < 0) {
        this.dataStateService.selectedOptions.push(option.item);
      } else {
        this.dataStateService.selectedOptions.splice(selectedIndex, 1);
      }

      this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
    } else {
      if (this.dataStateService.selectedOption) {
        this.dataStateService.selectedOption = undefined;
      } else {
        this.dataStateService.selectedOption = option.item;
      }

      this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOption);
    }

    if (this.config.closeMenuOnSelect) {
      this.dataStateService.componentLoaderRef.hide();
    }
  }
}
