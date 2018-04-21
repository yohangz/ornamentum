import { Component } from '@angular/core';

import { DataTableSelectMode, DataTableTranslations } from '../../../../../../library/index';

import { Observable } from 'rxjs/Observable';

import { sampleData } from '../../data/data-table-example';

@Component({
  selector: 'app-data-table-translations-component',
  templateUrl: './data-table-translations.component.html',
  styleUrls: ['./data-table-translations.component.scss']
})
export class DataTableTranslationsComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public DataTableTranslations: DataTableTranslations = {
    paginationLimit: 'This is the message for paginationLimit',
    paginationRange: 'This is the message for paginationRange',
    noDataMessageBody: 'Customized No Data Message Body',
    noDataMessageHeader: 'Customized No Data Message Header'
  };

  public emptyItemSet: Observable<any>;
  public paginationItems: Observable<any>;

  constructor() {
    this.emptyItemSet = Observable.of([]);
    this.paginationItems = Observable.of(sampleData);
  }
}
