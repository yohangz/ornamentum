import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/internal/Subscription';

import { MenuGroup, ResizeArgs } from '../../../core/models';
import { ContainerResponsiveService } from '../../../core/services';


@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent  implements OnDestroy {
  private activeRouteSubscription: Subscription;
  private containerResponsiveSubscription: Subscription;

  public navigationData: MenuGroup[];
  public containerHeight: number;

  constructor(private activatedRoute: ActivatedRoute,
              private containerResponsive: ContainerResponsiveService) {
    this.activeRouteSubscription = this.activatedRoute.data.subscribe((data: any) => {
      this.navigationData = data.navigation;
    });

    this.containerResponsiveSubscription = this.containerResponsive.containerSize.subscribe((resizeArgs: ResizeArgs) => {
      this.containerHeight = resizeArgs.containerHeight;
    });
  }

  public ngOnDestroy(): void {
    this.activeRouteSubscription.unsubscribe();
    this.containerResponsiveSubscription.unsubscribe();
  }
}
