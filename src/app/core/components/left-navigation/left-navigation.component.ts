import { Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

import { MenuGroup, ResizeArgs } from '../../models';
import { Subscription } from 'rxjs/internal/Subscription';
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

  @ViewChild('searchBox')
  public searchBox: ElementRef;

  public containerHeight: number;
  public expanded =  true;
  public mobileMode = false;

  constructor(private containerResponsive: ContainerResponsiveService) {
    this.containerResponsiveSubscription = this.containerResponsive.containerSize.subscribe((resizeArgs: ResizeArgs) => {
      this.containerHeight = resizeArgs.containerHeight;

      this.mobileMode = resizeArgs.windowWidth < 991;
      this.expanded = !this.mobileMode;
    });

    this.navigationToggleSubscription = this.containerResponsive.navigationToggle.subscribe(() => {
      this.expanded = !this.expanded;
    });
  }

  public get menuHeight(): number {
    return this.containerHeight - this.searchBox.nativeElement.offsetHeight;
  }

  public ngOnDestroy(): void {
    this.containerResponsiveSubscription.unsubscribe();
    this.navigationToggleSubscription.unsubscribe();
  }
}
