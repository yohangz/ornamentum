import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { FilterEventArgs } from '../../models/filter-event-args.model';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { FilterOption } from '../../';
import { compiler } from 'webpack';
import { DropdownComponent } from '../../../dropdown';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ng-data-table-column-filter-template',
  styleUrls: ['./data-table-column-filter-template.component.scss'],
  templateUrl: './data-table-column-filter-template.component.html'
})
export class DataTableColumnFilterTemplateComponent implements OnInit, OnDestroy {
  @Input()
  public column: DataTableColumnComponent;

  @Input()
  public customFilterStream: Observable<FilterEventArgs>;

  @Output()
  public filter = new EventEmitter();

  public filterDataStream = new Subject<FilterOption[]>();

  private filterValueExtractorSubscription: Subscription;

  constructor(public config: DataTableConfigService,
              public dataStateService: DataTableDataStateService,
              private eventStateService: DataTableEventStateService) {
  }

  public ngOnInit(): void {
    if (this.column.showDropdownFilter && this.dataStateService.onFilterValueExtract) {
      this.eventStateService.fetchFilterOptionsStream.subscribe(() => {
        if (this.filterValueExtractorSubscription) {
          this.filterValueExtractorSubscription.unsubscribe();
          this.filterValueExtractorSubscription = null;
        }

        this.filterValueExtractorSubscription = this.dataStateService.onFilterValueExtract(this.column)
          .subscribe((options: FilterOption[]) => {
            this.filterDataStream.next(options);
          });
      });

    }
  }

  public ngOnDestroy(): void {
    if (this.filterValueExtractorSubscription) {
      this.filterValueExtractorSubscription.unsubscribe();
    }

    this.filterDataStream.complete();
  }
}
