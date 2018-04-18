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
        iconClasses: ['zmdi', 'zmdi-folder-star-alt', 'menu-icon'],
        routePath: 'data-table',
        title: 'Data Table',
      },
      {
        iconClasses: ['zmdi', 'zmdi-file-text', 'menu-icon'],
        routePath: 'dropdown',
        title: 'Dropdown'
      }
    ];
  }
}

