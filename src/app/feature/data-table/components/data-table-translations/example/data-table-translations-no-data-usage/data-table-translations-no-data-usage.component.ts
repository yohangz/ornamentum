import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { DataTableTranslations } from 'ornamentum';

@Component({
  selector: 'app-data-table-translations-no-data-usage',
  templateUrl: './data-table-translations-no-data-usage.component.html'
})
export class DataTableTranslationsNoDataUsageComponent {
  public DataTableTranslations: DataTableTranslations = {
    paginationLimit: 'This is the message for paginationLimit',
    paginationRange: 'This is the message for paginationRange',
    noDataMessageBody: 'Customized No Data Message Body',
    noDataMessageHeader: 'Customized No Data Message Header'
  };

  public emptyItemSet: Observable<any>;

  constructor() {
    this.emptyItemSet = of([]);
  }
}
