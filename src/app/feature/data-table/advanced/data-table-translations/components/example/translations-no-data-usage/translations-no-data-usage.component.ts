import { Component } from '@angular/core';

import { DataTableTranslations } from 'ornamentum';

@Component({
  selector: 'app-translations-no-data-usage',
  templateUrl: './translations-no-data-usage.component.html'
})
export class TranslationsNoDataUsageComponent {
  public DataTableTranslations: DataTableTranslations = {
    noDataMessageHeader: 'Customized No Data Message Header',
    noDataMessageBody: 'Customized No Data Message Body'
  };

  public emptyItemSet: any;

  constructor() {
    this.emptyItemSet = [];
  }
}
