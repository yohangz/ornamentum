import { Component, OnDestroy } from '@angular/core';

import { fromEvent, Subscription } from 'rxjs/index';
import { debounceTime } from 'rxjs/operators';

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
  private resizeEventSubscription: Subscription;
  public sideMenuCollapsed = false;

  constructor() {
    this.sideMenuCollapsed = window.innerWidth < 991;
    this.resizeEventSubscription = fromEvent(window, 'resize')
      .pipe(
        debounceTime(66)
      )
      .subscribe(() => {
        this.sideMenuCollapsed = window.innerWidth < 991;
      });
  }

  public ngOnDestroy(): void {
    this.resizeEventSubscription.unsubscribe();
  }
}

