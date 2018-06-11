import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/internal/Subscription';

import { MenuGroup, ResizeArgs } from '../../../core/models';
import { ContainerResponsiveService } from '../../../core/services';
import { animate, group, query, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  animations: [
    trigger('routeFadeIn', [
      transition('* <=> *', [
        query(':enter, :leave', style({position: 'fixed', width: '100%'}), {optional: true}),
        group([
          query(':enter', [
            style({opacity: 0}),
            animate('0.5s ease-in-out', style({opacity: 1}))
          ], {optional: true}),
          query(':leave', [
            style({opacity: 1}),
            animate('0.5s ease-in-out', style({opacity: 0}))
          ], {optional: true}),
        ])
      ])
    ])
  ]
})
export class FeatureComponent  implements OnDestroy {
  private activeRouteSubscription: Subscription;
  private containerResponsiveSubscription: Subscription;

  public navigationData: MenuGroup[];
  public containerHeight: number;

  constructor(private activatedRoute: ActivatedRoute,
              private containerResponsive: ContainerResponsiveService,
              private router: Router) {
    this.activeRouteSubscription = this.activatedRoute.data.subscribe((data: any) => {
      this.navigationData = data.navigation;
    });

    this.containerResponsiveSubscription = this.containerResponsive.containerSize.subscribe((resizeArgs: ResizeArgs) => {
      this.containerHeight = resizeArgs.containerHeight;
    });
  }

  public getState(): string {
    return this.router.url;
  }

  public ngOnDestroy(): void {
    this.activeRouteSubscription.unsubscribe();
    this.containerResponsiveSubscription.unsubscribe();
  }
}
