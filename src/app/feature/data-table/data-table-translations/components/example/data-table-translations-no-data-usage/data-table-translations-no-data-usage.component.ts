import { Component } from '@angular/core';

import { DataTableTranslations } from 'ornamentum';

@Component({
  selector: 'app-data-table-translations-no-data-usage',
  templateUrl: './data-table-translations-no-data-usage.component.html'
})
export class DataTableTranslationsNoDataUsageComponent {
  public DataTableTranslations: DataTableTranslations = {
    noDataMessageHeader: 'Customized No Data Message Header',
    noDataMessageBody: 'Customized No Data Message Body'
  };

  public emptyItemSet: any;

  constructor() {
    this.emptyItemSet = [];
  }
}
