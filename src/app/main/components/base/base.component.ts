import { AfterContentInit, Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { SwUpdate } from '@angular/service-worker';

import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs/internal/Subscription';

/**
 * Component class for showing base view.
 * @class BaseComponent
 */
@Component({
  selector: 'app-base',
  styleUrls: ['./base.component.scss'],
  templateUrl: './base.component.html'
})
export class BaseComponent implements AfterContentInit, OnDestroy {
  private previousUrl: string;
  private readonly swSubscription: Subscription;

  public showWorkerUpdateBanner = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private updates: SwUpdate,
              @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.swSubscription = this.updates.available.subscribe(() => {
        this.showWorkerUpdateBanner = true;
        setTimeout(() => {
          this.updates.activateUpdate().then(() => document.location.reload());
        }, 2000);
      });
    }
  }

  private getUrl(): string {
    return this.router.routerState.snapshot.url.slice(0, this.router.routerState.snapshot.url.indexOf('#'));
  }

  private prettyPrint(): void {
    const currentUrl = this.getUrl();
    if (typeof PR !== 'undefined' && this.previousUrl !== currentUrl) {
      this.previousUrl = currentUrl;
      PR.prettyPrint();
    }
  }

  public ngAfterContentInit(): any {
    if (isPlatformBrowser(this.platformId)) {
      this.previousUrl = this.getUrl();
      setTimeout(() => PR.prettyPrint(), 50);

      this.router.events
        .pipe(
          filter(event => event instanceof NavigationEnd)
        )
        .subscribe(() => {
          setTimeout(() => this.prettyPrint(), 50);
        });
    }
  }

  public ngOnDestroy(): void {
    if (this.swSubscription) {
      this.swSubscription.unsubscribe();
    }
  }
}
