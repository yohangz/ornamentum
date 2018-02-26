import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import get from 'lodash.get';

import { DropdownItem } from '../../models/dropdown-item.model';
import { DropdownMenuPosition } from '../../models/dropdown-menu-position.enum';

import { DropdownConfigService } from '../../services/dropdown-config.service';
import { DropdownDataStateService } from '../../services/dropdown-data-state.service';
import { DropdownEventStateService } from '../../services/dropdown-event-state.service';

@Component({
  selector: 'ng-dropdown-view',
  templateUrl: './dropdown-view.component.html',
  styleUrls: ['./dropdown-view.component.scss']
})
export class DropdownViewComponent implements OnInit, OnDestroy {
  private onAllOptionSelectChangeSubscription: Subscription;

  @Output()
  public closeDropdown = new EventEmitter<void>();

  constructor(public config: DropdownConfigService,
              public dataStateService: DropdownDataStateService,
              private eventStateService: DropdownEventStateService) {
  }

  public positionRight(): number {
    if (this.config.menuPosition === DropdownMenuPosition.BOTTOM_RIGHT || this.config.menuPosition === DropdownMenuPosition.TOP_RIGHT) {
      return 0;
    }

    return;
  }

  public positionBottom(): number {
    if (this.config.menuPosition === DropdownMenuPosition.TOP_RIGHT || this.config.menuPosition === DropdownMenuPosition.TOP_LEFT) {
      return 0;
    }

    return;
  }

  public toggleOptionSelectedState(option: DropdownItem): void {
    option.selected = !option.selected;
    this.optionSelectChange(option);
  }

  public optionSelectChange(option: DropdownItem, triggerSelectChange: boolean = true, triggerSelectAllStateUpdate: boolean = true): void {
    const id = get(option.item, this.config.selectTrackBy);
    if (this.config.multiSelectable) {
      const selectedIndex = this.dataStateService.selectedOptions.findIndex((item: any) => {
        return get(item, this.config.selectTrackBy) === id;
      });

      if (option.selected && selectedIndex < 0) {
        this.dataStateService.selectedOptions.push(option.item);
      } else if (!option.selected && selectedIndex > -1) {
        this.dataStateService.selectedOptions.splice(selectedIndex, 1);
      }

      if (triggerSelectChange) {
        this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
      }

      if (triggerSelectAllStateUpdate) {
        this.dataStateService.setAllOptionsSelectedState();
      }
    } else {
      if (option.selected) {
        this.dataStateService.selectedOption = option.item;
      } else {
        this.dataStateService.selectedOption = undefined;
      }

      // deselect all options except current.
      if (this.config.groupByField) {
        this.dataStateService.dropdownItemGroups.forEach(group => {
          group.items.forEach(item => {
            if (item !== option) {
              item.selected = false;
            }
          });
        });
      } else {
        this.dataStateService.dropdownItems.forEach(item => {
          if (item !== option) {
            item.selected = false;
          }
        });
      }

      if (triggerSelectChange) {
        this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOption);
      }
    }

    if (this.config.closeMenuOnSelect && option.selected) {
      this.closeDropdown.emit();
    }
  }

  public onSelectOptionRemove(event: Event, option: DropdownItem): void {
    event.stopPropagation();
    option.selected = false;
    this.optionSelectChange(option);
  }

  private allOptionsSelectedStateChange(selectedState: boolean): void {
    if (this.config.groupByField) {
      this.dataStateService.dropdownItemGroups.forEach(group => {
        group.items.forEach(item => {
          item.selected = selectedState;
          this.optionSelectChange(item, !this.config.triggerSelectChangeOncePerSelectAll, false);
        });
      });
    } else {
      this.dataStateService.dropdownItems.forEach(item => {
        item.selected = selectedState;
        this.optionSelectChange(item, !this.config.triggerSelectChangeOncePerSelectAll, false);
      });
    }

    if (this.config.triggerSelectChangeOncePerSelectAll) {
      this.eventStateService.selectChangeStream.emit(this.dataStateService.selectedOptions);
    }
  }

  public ngOnInit(): void {
    this.onAllOptionSelectChangeSubscription = this.eventStateService.allOptionSelectChangeStream
      .subscribe((state: boolean) => {
        this.allOptionsSelectedStateChange(state);
      });
  }

  public ngOnDestroy(): void {
    if (this.onAllOptionSelectChangeSubscription) {
      this.onAllOptionSelectChangeSubscription.unsubscribe();
    }
  }
}
