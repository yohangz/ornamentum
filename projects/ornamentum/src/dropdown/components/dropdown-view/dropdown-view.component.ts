import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { DropdownConfigService } from '../../services/dropdown-config.service';
import { DropdownDataStateService } from '../../services/dropdown-data-state.service';
import { DropdownEventStateService } from '../../services/dropdown-event-state.service';

/**
 * Dropdown view component; Render dropdown options list popup
 */
@Component({
  selector: 'ng-dropdown-view',
  templateUrl: './dropdown-view.component.html'
})
export class DropdownViewComponent implements OnInit, OnDestroy {
  public scrollEvent = new Subject<any>();
  private scrollEventSubscription: Subscription;

  constructor(
    public config: DropdownConfigService,
    public dataStateService: DropdownDataStateService,
    private eventStateService: DropdownEventStateService
  ) {}

  /**
   * Component initialize lifecycle event handler
   */
  public ngOnInit(): void {
    this.scrollEventSubscription = this.scrollEvent.pipe(debounceTime(100)).subscribe((event: any) => {
      this.checkScrollPosition(event);
    });
  }

  /**
   * Component destroy lifecycle event handler
   */
  public ngOnDestroy(): void {
    if (this.scrollEventSubscription) {
      this.scrollEventSubscription.unsubscribe();
    }
  }

  /**
   * Performs data loading when scrolling by checking the scroll position; This will be trigger only when loadOnScroll is true
   * @param event Target event arguments reference
   */
  public checkScrollPosition(event: any) {
    const scrollTop = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight;
    const scrollElementHeight = event.target.clientHeight;

    const roundingPixel = 1;
    const gutterPixel = 1;

    if (
      scrollTop >= scrollHeight - (1 + this.config.loadViewDistanceRatio) * scrollElementHeight - roundingPixel - gutterPixel &&
      this.dataStateService.currentOptionCount < this.dataStateService.totalOptionCount &&
      !this.dataStateService.dataLoading
    ) {
      this.dataStateService.dataLoading = true;
      this.dataStateService.offset = this.dataStateService.offset + this.config.limit;
      this.eventStateService.dataFetchStream.emit(false);
    }
  }
}
