import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { DataTableFilterEventArgs } from '../../models/data-table-filter-event-args.model';
import { DataTableFilterOption } from '../../models/data-table-filter-option.model';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';
import { DropdownComponent } from '../../../dropdown/components/dropdown/dropdown.component';

import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
import { DataTableScrollPositionService } from '../../services/data-table-scroll-position.service';
import { DataTableScrollPoint } from '../../../data-table/models/data-table-scroll-point.model';
import { DropdownDataBindCallback } from '../../../dropdown/models/dropdown-data-bind-callback.model';
import { DropdownQueryResult } from '../../../dropdown/models/dropdown-query-result.model';
import { DropdownRequestParams } from '../../../dropdown/models/dropdown-request-params.model';

/**
 * Column filter template component. Render column filter template via this component.
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

  @Input()
  public index: number;

  @Output()
  public filter = new EventEmitter();

  public filterDataBind: DropdownDataBindCallback<any>;

  private fetchFilterOptionsStreamSubscription: Subscription;
  private scrollPositionStreamSubscription: Subscription;

  private filterDropdown: DropdownComponent;

  constructor(
    public config: DataTableConfigService,
    public dataStateService: DataTableDataStateService,
    private eventStateService: DataTableEventStateService,
    private scrollPositionService: DataTableScrollPositionService
  ) {}

  /**
   * Component initialize lifecycle event.
   */
  public ngOnInit(): void {
    if (this.column.showDropdownFilter) {
      this.scrollPositionStreamSubscription = this.scrollPositionService.scrollPositionStream
        .subscribe((pos: DataTableScrollPoint) => {
          if (pos.isHorizontal) {
            this.filterDropdown.close();
          }
        });

      if (this.config.showDropdownFilter) {
        this.fetchFilterOptionsStreamSubscription = this.eventStateService.fetchFilterOptionsStream.subscribe(() => {
          this.filterDropdown.fetchData(true);
        });

        this.filterDataBind = (params: DropdownRequestParams): Observable<DropdownQueryResult<any>> => {
          return this.dataStateService.onFilterValueExtract(params);
        };
      }
    }
  }

  /**
   * Component destroy lifecycle event.
   */
  public ngOnDestroy(): void {
    if (this.fetchFilterOptionsStreamSubscription) {
      this.fetchFilterOptionsStreamSubscription.unsubscribe();
    }

    if (this.scrollPositionStreamSubscription) {
      this.scrollPositionStreamSubscription.unsubscribe();
    }
  }

  public onFilterDropdownInit(filterDropdown: DropdownComponent): void {
    this.filterDropdown = filterDropdown;
  }

  /**
   * Clear current column filter value.
   */
  public clearFilter(): void {
    this.column.filter = '';
    this.filter.emit();
  }
}
