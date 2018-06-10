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

  @Input()
  public menuGroups: MenuGroup[];

  @ViewChild('searchBox')
  public searchBox: ElementRef;

  public containerHeight: number;

  constructor(private containerResponsive: ContainerResponsiveService) {
    this.containerResponsiveSubscription = this.containerResponsive.containerSize.subscribe((resizeArgs: ResizeArgs) => {
      this.containerHeight = resizeArgs.containerHeight;
    });
  }

  public get menuHeight(): number {
    return this.containerHeight - this.searchBox.nativeElement.offsetHeight;
  }

  public ngOnDestroy(): void {
    this.containerResponsiveSubscription.unsubscribe();
  }
}
