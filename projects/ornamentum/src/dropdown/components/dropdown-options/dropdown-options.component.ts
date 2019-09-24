import { Component } from '@angular/core';

import { get } from '../../../utility/services/object-utility.service';

import { DropdownOption } from '../../models/dropdown-option.model';

import { DropdownDataStateService } from '../../services/dropdown-data-state.service';
import { DropdownConfigService } from '../../services/dropdown-config.service';
import { DropdownEventStateService } from '../../services/dropdown-event-state.service';

@Component({
  selector: 'ng-dropdown-options',
  templateUrl: './dropdown-options.component.html'
})
export class DropdownOptionsComponent {
  constructor(
    public config: DropdownConfigService,
    public dataStateService: DropdownDataStateService,
    private eventStateService: DropdownEventStateService
  ) {}

  public getSelectedState(id: any): boolean {
    if (this.config.selectMode === 'multi') {
      return this.dataStateService.selectedOptions.some((option: any) => {
        return get(option, this.config.selectTrackBy) === id;
      });
    }

    return get(this.dataStateService.selectedOption, this.config.selectTrackBy) === id;
  }

  public onOptionClick(option: DropdownOption, event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target && target.classList && target.classList.contains('ng-ignore-propagation')) {
      return;
    }

    this.toggleOptionSelectedState(option);
  }

  public onOptionCheckboxClick(option: DropdownOption, event: MouseEvent): void {
    // Prevent single mode checkbox getting unchecked on tapping already selected.
    if (this.config.selectMode === 'single') {
      const selectedId = get(this.dataStateService.selectedOption, this.config.selectTrackBy);
      const id = get(option.option, this.config.selectTrackBy);
      if (selectedId === id) {
        event.preventDefault();
      }
    }
  }

  public toggleOptionSelectedState(option: DropdownOption): void {
    const id = get(option.option, this.config.selectTrackBy);

    switch (this.config.selectMode) {
      case 'multi': {
        const selectedIndex = this.dataStateService.selectedOptions.findIndex((option: any) => {
          return get(option, this.config.selectTrackBy) === id;
        });

        if (selectedIndex < 0) {
          this.dataStateService.selectedOptions.push(option.option);
        } else {
          this.dataStateService.selectedOptions.splice(selectedIndex, 1);
        }

        this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
        break;
      }
      case 'single-toggle': {
        if (get(this.dataStateService.selectedOption, this.config.selectTrackBy) === id) {
          this.dataStateService.selectedOption = undefined;
        } else {
          this.dataStateService.selectedOption = option.option;
        }

        this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOption);
        break;
      }
      case 'single': {
        const selectedId = get(this.dataStateService.selectedOption, this.config.selectTrackBy);
        this.dataStateService.selectedOption = option.option;

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
