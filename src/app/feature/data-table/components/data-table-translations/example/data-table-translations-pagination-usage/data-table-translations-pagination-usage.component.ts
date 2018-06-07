import { Component } from '@angular/core';

import { DataTableTranslations } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './data-table-translations-pagination-usage.data';

@Component({
  selector: 'app-data-table-translations-pagination-usage',
  templateUrl: './data-table-translations-pagination-usage.component.html'
})
export class DataTableTranslationsPaginationUsageComponent {
  public DataTableTranslations: DataTableTranslations = {
    paginationLimit: 'This is the message for paginationLimit',
    paginationRange: 'This is the message for paginationRange',
    noDataMessageBody: 'Customized No Data Message Body',
    noDataMessageHeader: 'Customized No Data Message Header'
  };

  public paginationItems: Observable<any>;

  constructor() {
    this.paginationItems = of(data);
  }
}
