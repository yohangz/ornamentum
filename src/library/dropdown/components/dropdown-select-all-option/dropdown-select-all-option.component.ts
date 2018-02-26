import { Component } from '@angular/core';

import { DropdownDataStateService } from '../../services/dropdown-data-state.service';
import { DropdownConfigService } from '../../services/dropdown-config.service';
import { DropdownEventStateService } from '../../services/dropdown-event-state.service';

@Component({
  selector: 'ng-dropdown-select-all-option',
  templateUrl: './dropdown-select-all-option.component.html',
  styleUrls: ['./dropdown-select-all-option.component.scss']
})
export class DropdownSelectAllOptionComponent {
  constructor(public config: DropdownConfigService,
              public dataStateService: DropdownDataStateService,
              public eventStateService: DropdownEventStateService) {
  }

  public toggleAllOptionSelectedState(): void {
    this.dataStateService.allOptionsSelected = !this.dataStateService.allOptionsSelected;
    this.eventStateService.allOptionSelectChangeStream.emit(this.dataStateService.allOptionsSelected);
  }

  public get allOptionsSelected(): boolean {
    return this.dataStateService.allOptionsSelected;
  }
}
