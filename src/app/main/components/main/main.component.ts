import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/internal/Subscription';

import { MenuItem } from '../../../core/models';

/**
 * Component class for showing main view.
 * @class MainComponent
 */
@Component({
  selector: 'app-main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html'
})
export class MainComponent implements OnDestroy {
  public navigationData: MenuItem[];
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

