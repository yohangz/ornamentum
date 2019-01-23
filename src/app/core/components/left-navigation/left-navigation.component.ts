import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { MenuGroup, MenuItem } from '../../models';

import { NavigationService } from '../../services';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent implements OnDestroy {
  private navigationToggleSubscription: Subscription;
  private routeEventSubscription: Subscription;

  @Input()
  public menuGroups: MenuGroup[];

  @Output()
  public routeChange = new EventEmitter<MenuItem>();

  public expanded = false;

  constructor(private containerResponsive: NavigationService, private router: Router) {
    this.navigationToggleSubscription = this.containerResponsive.navigationToggle.subscribe(() => {
      this.expanded = !this.expanded;
    });

    this.routeEventSubscription = this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(() => {
      this.closeMenu();
    });
  }

  public closeMenu(): void {
    this.expanded = false;
  }

  public ngOnDestroy(): void {
    this.navigationToggleSubscription.unsubscribe();
    this.routeEventSubscription.unsubscribe();
  }

  public getExpandedClass(state: boolean): string {
    return state ? 'expanded' : 'collapsed';
  }

  public menuItemToggle(menuGroup: MenuGroup): void {
    menuGroup.expanded = !menuGroup.expanded;
  }

  public onRouteChange(menuItem: MenuItem): void {
    this.routeChange.next(menuItem);
  }
}
