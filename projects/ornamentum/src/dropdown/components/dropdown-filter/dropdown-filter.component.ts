import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { DropdownConfigService } from '../../services/dropdown-config.service';
import { DropdownDataStateService } from '../../services/dropdown-data-state.service';
import { DropdownEventStateService } from '../../services/dropdown-event-state.service';

@Component({
  selector: 'ng-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.scss']
})
export class DropdownFilterComponent implements OnDestroy, OnInit {
  private dataFilterStream = new Subject();
  private dataFilterSubscription: Subscription;

  constructor(public config: DropdownConfigService,
              public dataStateService: DropdownDataStateService,
              public eventStateService: DropdownEventStateService) {
  }

  public clearFilter(): void {
    this.dataStateService.offset = 0;
    this.dataStateService.filterText = '';
    this.eventStateService.dataFetchStream.emit(false);
  }

  public filterKeyUp(): void {
    if (this.config.filterDebounce) {
      this.dataFilterStream.next(this.dataStateService.filterText);
    } else {
      this.dataStateService.offset = 0;
      this.eventStateService.dataFetchStream.emit(false);
    }
  }

  private initFilterDebounceEvent(): void {
    this.dataFilterSubscription = this.dataFilterStream
      .pipe(
        debounceTime(this.config.filterDebounceTime)
      )
      .subscribe(() => {
        this.dataStateService.offset = 0;
        this.eventStateService.dataFetchStream.emit(false);
      });
  }

  public ngOnDestroy(): void {
    if (this.dataFilterSubscription) {
      this.dataFilterSubscription.unsubscribe();
    }
  }

  public ngOnInit(): void {
    this.initFilterDebounceEvent();
  }
}
