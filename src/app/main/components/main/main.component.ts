import { AfterContentInit, Component } from '@angular/core';

import { MenuItem } from '../../../core/models';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs/operators';

/**
 * Component class for showing main view.
 * @class AppMainComponent
 */
@Component({
  selector: 'app-main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html'
})
export class AppMainComponent implements AfterContentInit {
  public menuItems: MenuItem[] = [];
  private previousUrl: string;

  constructor(private route: ActivatedRoute,
              private router: Router) {
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

  private getUrl(): string {
    return this.router.routerState.snapshot.url.slice(0, this.router.routerState.snapshot.url.indexOf('#'));
  }

  private prettyPrint(): void {
    const currentUrl = this.getUrl();
    if (typeof PR !== 'undefined' && this.previousUrl !== currentUrl) {
      this.previousUrl = currentUrl;
      PR.prettyPrint();
    }
  }

  public ngAfterContentInit(): any {
    this.previousUrl = this.getUrl();
    setTimeout(() => PR.prettyPrint(), 50);

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        setTimeout(() => this.prettyPrint(), 50);
      });
  }
}

