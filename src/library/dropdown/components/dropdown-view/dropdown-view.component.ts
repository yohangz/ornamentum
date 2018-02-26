import { Component, Input } from '@angular/core';

import { DropdownViewProperty } from '../../models/dropdown-view-property.model';

import { DropdownConfigService } from '../../services/dropdown-config.service';
import { DropdownDataStateService } from '../../services/dropdown-data-state.service';

@Component({
  selector: 'ng-dropdown-view',
  templateUrl: './dropdown-view.component.html',
  styleUrls: ['./dropdown-view.component.scss']
})
export class DropdownViewComponent {

  @Input()
  public props: DropdownViewProperty;

  constructor(public config: DropdownConfigService,
              public dataStateService: DropdownDataStateService) {
  }
}
