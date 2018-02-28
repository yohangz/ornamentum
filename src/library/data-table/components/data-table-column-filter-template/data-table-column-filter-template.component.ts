import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { DataTableFilterEventArgs } from '../../models/data-table-filter-event-args.model';
import { DataTableFilterOption } from '../../models/data-table-filter-option.model';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';

@Component({
  selector: 'ng-data-table-column-filter-template',
  styleUrls: ['./data-table-column-filter-template.component.scss'],
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
          .subscribe((options: DataTableFilterOption[]) => {
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

  public clearFilter(): void {
    this.column.filter = '';
    this.filter.emit();
  }
}
