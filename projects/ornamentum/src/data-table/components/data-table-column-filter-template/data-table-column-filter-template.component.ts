import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { Observable, Subject, Subscription } from 'rxjs';

import { DataTableFilterEventArgs } from '../../models/data-table-filter-event-args.model';
import { DataTableFilterOption } from '../../models/data-table-filter-option.model';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';

/**
 * Column filter template component; Render column filter template via this component
 */
@Component({
  selector: 'ng-data-table-column-filter-template',
  templateUrl: './data-table-column-filter-template.component.html'
})
export class DataTableColumnFilterTemplateComponent implements OnInit, OnDestroy {
  @Input()
  public column: DataTableColumnComponent;

  @Input()
  public customFilterStream: Observable<DataTableFilterEventArgs>;

  @Output()
  public filter = new EventEmitter();

  public filterDataStream = new Subject<DataTableFilterOption[]>();

  private filterValueExtractorSubscription: Subscription;
  private fetchFilterOptionsStreamSubscription: Subscription;

  constructor(public config: DataTableConfigService,
              public dataStateService: DataTableDataStateService,
              private eventStateService: DataTableEventStateService) {
  }

  /**
   * Component initialize lifecycle event
   */
  public ngOnInit(): void {
    if (this.column.showDropdownFilter && this.dataStateService.onFilterValueExtract) {
      this.fetchFilterOptionsStreamSubscription = this.eventStateService.fetchFilterOptionsStream
        .subscribe(() => {
          if (this.filterValueExtractorSubscription) {
            this.filterValueExtractorSubscription.unsubscribe();
            this.filterValueExtractorSubscription = null;
          }

          this.filterValueExtractorSubscription = this.dataStateService.onFilterValueExtract(this.column)
            .subscribe((options: DataTableFilterOption[]) => {
              setTimeout(() => this.filterDataStream.next(options), 0);
            });
        });
    }
  }

  /**
   * Component destroy lifecycle event
   */
  public ngOnDestroy(): void {
    if (this.fetchFilterOptionsStreamSubscription) {
      this.fetchFilterOptionsStreamSubscription.unsubscribe();
    }

    if (this.filterValueExtractorSubscription) {
      this.filterValueExtractorSubscription.unsubscribe();
    }

    this.filterDataStream.complete();
  }

  /**
   * Clear current column filter value
   */
  public clearFilter(): void {
    this.column.filter = '';
    this.filter.emit();
  }
}
