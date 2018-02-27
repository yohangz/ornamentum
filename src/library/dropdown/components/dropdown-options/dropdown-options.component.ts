import { Component, EventEmitter, Output } from '@angular/core';

import { DropdownItem } from '../../models/dropdown-item.model';

import { DropdownDataStateService } from '../../services/dropdown-data-state.service';
import { DropdownConfigService } from '../../services/dropdown-config.service';


@Component({
  selector: 'ng-dropdown-options',
  templateUrl: './dropdown-options.component.html',
  styleUrls: ['./dropdown-options.component.scss']
})
export class DropdownOptionsComponent {
  @Output()
  public toggleOptionSelectedState = new EventEmitter<DropdownItem>();

  constructor(public config: DropdownConfigService,
              public dataStateService: DropdownDataStateService) {
  }
}
