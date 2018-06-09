import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/internal/Subscription';

import { MenuGroup } from '../../../core/models';
import { ContainerResponsiveService } from '../../services/container-responsive.service';

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

  constructor(private activatedRoute: ActivatedRoute, private containerResponsive: ContainerResponsiveService) {
    this.activeRouteSubscription = this.activatedRoute.data.subscribe((data: any) => {
      this.navigationData = data.navigation;
    });

    this.containerResponsiveSubscription = this.containerResponsive.containerSize.subscribe((height: number) => {
      this.containerHeight = height;
    });
  }

  public ngOnDestroy(): void {
    this.activeRouteSubscription.unsubscribe();
    this.containerResponsiveSubscription.unsubscribe();
  }
}
