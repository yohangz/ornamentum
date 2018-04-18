import {
  Component,
  Input
} from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from '../../models';

@Component({
  selector: 'app-menu-bar',
  styleUrls: ['./menu-bar.component.scss'],
  templateUrl: './menu-bar.component.html'
})
export class MenuBarComponent {
  @Input()
  public menuItems: MenuItem[];

  @Input()
  public appName: string;

  constructor(private router: Router) {
  }

  public resetState(menuItems: MenuItem[], active: boolean): void {
    menuItems.forEach((item: MenuItem) => {
      if (active) {
        item.active = false;
      }
    });
  }

  public onMenuItemClick(...menuItemPath: MenuItem[]): void {
    this.resetState(this.menuItems, true);

    menuItemPath.forEach((item: MenuItem) => {
      item.active = true;
    });

    this.router.navigateByUrl(menuItemPath.map(menuItem => menuItem.routePath).join('/'));
  }
}
