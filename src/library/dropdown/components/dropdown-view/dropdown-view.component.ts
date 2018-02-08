import { Component, Input } from '@angular/core';

import { DropdownViewProperty } from '../../models/dropdown-view-property.model';

@Component({
  selector: 'ng-dropdown-view',
  templateUrl: './dropdown-view.component.html',
  styleUrls: ['./dropdown-view.component.scss']
})
export class DropdownViewComponent {

  @Input()
  public props: DropdownViewProperty;
}
