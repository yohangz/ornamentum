import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Subscription } from 'rxjs/internal/Subscription';

import { Theme } from '../../../core/models/theme.enum';
import { filter } from 'rxjs/operators';

/**
 * Component class for showing main view.
 * @class MainComponent
 */
@Component({
  selector: 'app-main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit, OnDestroy {
  public routerSubscription: Subscription;
  public themeCssClass: string = Theme.dark;

  @ViewChild('pageWrapper')
  public pageWrapper: ElementRef;

  constructor(private router: Router) {
  }

  public onThemeChange(cssClass: string): void {
    this.themeCssClass = cssClass;
  }

  public ngOnInit(): void {
    this.routerSubscription = this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        if (this.pageWrapper && this.router.url.includes('/feature/')) {
          this.pageWrapper.nativeElement.scrollTop = 0;
        }
      });
  }

  public ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}

