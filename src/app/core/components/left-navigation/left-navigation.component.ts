import { Component, Input, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/internal/Subscription';

import { MenuGroup, ResizeArgs } from '../../models';
import { ContainerResponsiveService } from '../../services';


@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent implements OnDestroy {
  private containerResponsiveSubscription: Subscription;
  private navigationToggleSubscription: Subscription;

  @Input()
  public menuGroups: MenuGroup[];

  public containerHeight: number;
  public expanded =  false;

  constructor(private containerResponsive: ContainerResponsiveService) {
    this.containerResponsiveSubscription = this.containerResponsive.containerSize.subscribe((resizeArgs: ResizeArgs) => {
      this.containerHeight = resizeArgs.containerHeight;
    });

    this.navigationToggleSubscription = this.containerResponsive.navigationToggle.subscribe(() => {
      this.expanded = !this.expanded;
    });
  }

  public get menuHeight(): number {
    return this.containerHeight - 32;
  }

  public closeMenu(): void {
    this.expanded = false;
  }

  public ngOnDestroy(): void {
    this.containerResponsiveSubscription.unsubscribe();
    this.navigationToggleSubscription.unsubscribe();
  }
}
