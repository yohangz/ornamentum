import { Component} from '@angular/core';

import { MenuItem } from '../../../core/models';

/**
 * Component class for showing main view.
 * @class AppMainComponent
 */
@Component({
  selector: 'app-main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html'
})
export class AppMainComponent {
  public menuItems: MenuItem[] = [];

  constructor() {
    this.menuItems = [
      {
        routePath: 'data-table',
        title: 'Data Table',
      },
      {
        routePath: 'dropdown',
        title: 'Dropdown'
      }
    ];
  }
}

