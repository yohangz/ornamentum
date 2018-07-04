import { Component } from '@angular/core';

import { DropdownMenuPosition } from 'ornamentum';

import { data } from './menu-position-usage.data';

@Component({
  selector: 'app-menu-position-usage',
  templateUrl: './menu-position-usage.component.html'
})
export class MenuPositionUsageComponent {
  public DropdownMenuPosition = DropdownMenuPosition;

  public items: any[];

  constructor() {
    this.items = data;
  }
}
