import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/internal/Subscription';

import { MenuGroup } from '../../../core/models';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent  implements OnDestroy {
  public navigationData: MenuGroup[];
  private activeRouteSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activeRouteSubscription = this.activatedRoute.data.subscribe((data: any) => {
      this.navigationData = data.navigation;
    });
  }

  public ngOnDestroy(): void {
    this.activeRouteSubscription.unsubscribe();
  }
}
