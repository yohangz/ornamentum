import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { DropdownItem } from '../../models/dropdown-item.model';

import { DropdownDataStateService } from '../../services/dropdown-data-state.service';
import { DropdownEventStateService } from '../../services/dropdown-event-state.service';
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
