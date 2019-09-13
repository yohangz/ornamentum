import { Component } from '@angular/core';

import { DataTableTranslations } from 'ornamentum';

@Component({
  selector: 'app-translations-usage',
  templateUrl: './translations-usage.component.html'
})
export class TranslationsUsageComponent {
  public emptyItemSet: any = [];

  public DataTableTranslations: DataTableTranslations = {
    paginationLimit: 'Sample Pagination Limit',
    paginationRange: 'Sample Pagination Range',
    noDataMessageHeader: 'Sample No Data Message Header',
    noDataMessageBody: 'Sample No Data Message Body'
  };
}
