import { Component, Input, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Subscription } from 'rxjs/internal/Subscription';
import { filter } from 'rxjs/operators';

import { MenuGroup } from '../../models';
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

  public expanded =  false;

  constructor(private containerResponsive: NavigationService, private router: Router) {
    this.navigationToggleSubscription = this.containerResponsive.navigationToggle.subscribe(() => {
      this.expanded = !this.expanded;
    });

    this.routeEventSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
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
}
