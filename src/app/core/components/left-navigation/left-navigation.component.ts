import { Component, Input, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/internal/Subscription';

import { MenuGroup } from '../../models';
import { NavigationService } from '../../services';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


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

  public containerHeight: number;
  public expanded =  false;

  constructor(private containerResponsive: NavigationService, private router: Router) {
    debugger;
    this.navigationToggleSubscription = this.containerResponsive.navigationToggle.subscribe(() => {
      this.expanded = !this.expanded;
    });

    this.routeEventSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeMenu();
    });
  }

  public get menuHeight(): number {
    return this.containerHeight - 32;
  }

  public closeMenu(): void {
    this.expanded = false;
  }

  public ngOnDestroy(): void {
    this.navigationToggleSubscription.unsubscribe();
    this.routeEventSubscription.unsubscribe();
  }
}
