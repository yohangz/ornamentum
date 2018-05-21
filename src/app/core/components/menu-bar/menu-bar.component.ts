import { AfterContentInit, Component, Input } from '@angular/core';
import { Router, UrlSegment } from '@angular/router';

import { MenuItem } from '../../models';

@Component({
  selector: 'app-menu-bar',
  styleUrls: ['./menu-bar.component.scss'],
  templateUrl: './menu-bar.component.html'
})
export class MenuBarComponent implements AfterContentInit {
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

  public initMenuItemActiveState(segments: UrlSegment[], menuItems: MenuItem[]): void {
    if (segments.length && menuItems.length) {
      const segment = segments.splice(0, 1)[0];
      const menuItem = menuItems.find((item: MenuItem) => {
        return item.routePath === segment.path;
      });

      if (menuItem) {
        menuItem.active = true;
      }
    }
  }

  public ngAfterContentInit(): void {
    const urlPath = this.router.parseUrl(this.router.url);
    if (urlPath.root.children.primary) {
      const segmentGroup = urlPath.root.children.primary.segments;
      this.initMenuItemActiveState([...segmentGroup], this.menuItems);
    }
  }
}
