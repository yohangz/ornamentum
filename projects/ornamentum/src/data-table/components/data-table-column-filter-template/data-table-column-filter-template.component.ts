import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { Observable, Subject, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import startCase from 'lodash/startCase';

import { DataTableFilterEventArgs } from '../../models/data-table-filter-event-args.model';
import { DataTableFilterOption } from '../../models/data-table-filter-option.model';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';
import { DropdownComponent } from '../../../dropdown/components/dropdown/dropdown.component';

import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableEventStateService } from '../../services/data-table-event.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';
import { DataTableScrollPositionService } from '../../services/data-table-scroll-position.service';
import { DataTableScrollPoint } from '../../../data-table/models/data-table-scroll-point.model';

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
   * Component initialize lifecycle event
   */
  public ngOnInit(): void {
    if (this.column.showDropdownFilter) {
      this.scrollPositionStreamSubscription = this.scrollPositionService.scrollPositionStream
        .subscribe((pos: DataTableScrollPoint) => {
          if (pos.isHorizontal) {
            this.filterDropdown.close();
          }
        });

      if (this.dataStateService.onFilterValueExtract) {
        this.fetchFilterOptionsStreamSubscription = this.eventStateService.fetchFilterOptionsStream
          .pipe(
            switchMap(() => {
              return this.dataStateService.onFilterValueExtract(this.column);
            })
          )
          .subscribe((options: DataTableFilterOption[]) => {
            setTimeout(() => this.filterDataStream.next(options), 0); // TODO: remove the timeout
          });
      }
    }
  }

  /**
   * Component destroy lifecycle event
   */
  public ngOnDestroy(): void {
    if (this.fetchFilterOptionsStreamSubscription) {
      this.fetchFilterOptionsStreamSubscription.unsubscribe();
    }

    if (this.scrollPositionStreamSubscription) {
      this.scrollPositionStreamSubscription.unsubscribe();
    }

    this.filterDataStream.complete();
  }

  public onFilterDropdownInit(filterDropdown: DropdownComponent): void {
    this.filterDropdown = filterDropdown;
  }

  /**
   * Clear current column filter value
   */
  public clearFilter(): void {
    this.column.filter = '';
    this.filter.emit();
  }

  /**
   * Get data table column combined unique identifier
   */
  public get getIdName(): string {
    return `${this.dataStateService.id}-${startCase(this.column.field).split(' ').join('-')}`;
  }
}
