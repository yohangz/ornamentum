import { Component } from '@angular/core';

import { DataTableTranslations } from 'ornamentum';

@Component({
  selector: 'app-translations-usage',
  templateUrl: './translations-usage.component.html'
})
export class TranslationsUsageComponent {
  public emptyItemSet: any = [];

  public DataTableTranslations: DataTableTranslations = {
    pagination: {
      limit: 'Sample Pagination Limit:',
      rangeKey: 'Sample Pagination Rage:'
    },
    noDataMessage: {
      header: 'Sample No Data Message Header',
      body: 'Sample No Data Message Body'
    }
  };
}
