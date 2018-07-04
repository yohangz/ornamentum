import { Component } from '@angular/core';

import { DropdownMenuPosition } from 'ornamentum';

import { data } from './menu-width-height-usage.data';

@Component({
  selector: 'app-menu-width-height-usage',
  templateUrl: './menu-width-height-usage.component.html'
})
export class MenuWidthHeightUsageComponent {
  public DropdownMenuPosition = DropdownMenuPosition;

  public items: any[];

  constructor() {
    this.items = data;
  }
}
