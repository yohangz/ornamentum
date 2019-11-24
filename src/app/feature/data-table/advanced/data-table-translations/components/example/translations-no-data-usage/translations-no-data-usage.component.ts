import { Component } from '@angular/core';

import { DataTableTranslations } from 'ornamentum';

@Component({
  selector: 'app-translations-no-data-usage',
  templateUrl: './translations-no-data-usage.component.html'
})
export class TranslationsNoDataUsageComponent {
  public DataTableTranslations: DataTableTranslations = {
    noDataMessage: {
      header: 'Sample No Data Message Header',
      body: 'Sample No Data Message Body'
    }
  };

  public emptyItemSet: any;

  constructor() {
    this.emptyItemSet = [];
  }
}
