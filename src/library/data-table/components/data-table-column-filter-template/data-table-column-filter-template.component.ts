import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

import { FilterEventArgs } from '../../models/filter-event-args.model';

import { DataTableConfigService } from '../../services/data-table-config.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ng-data-table-column-filter-template',
  styleUrls: ['./data-table-column-filter-template.component.scss'],
  templateUrl: './data-table-column-filter-template.component.html'
})
export class DataTableColumnFilterTemplateComponent {
  @Input()
  public column: DataTableColumnComponent;

  @Input()
  public customFilterStream: Observable<FilterEventArgs>;

  @Output()
  public filter = new EventEmitter();

  constructor(public config: DataTableConfigService) {
  }
}
