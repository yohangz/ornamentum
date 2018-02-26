import { DropdownConfigService } from '../../services/dropdown-config.service';
import { Component } from '@angular/core';

@Component({
  selector: 'ng-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.scss']
})
export class DropdownFilterComponent {
  constructor(public config: DropdownConfigService) {
  }


}
