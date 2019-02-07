import { Component } from '@angular/core';

import { DataTableTranslations } from 'ornamentum';

@Component({
  selector: 'app-translations-usage',
  templateUrl: './translations-usage.component.html'
})
export class TranslationsUsageComponent {
  public emptyItemSet: any = [];

  public DataTableTranslations: DataTableTranslations = {
    paginationLimit: 'This is the message for paginationLimit',
    paginationRange: 'This is the message for paginationRange',
    noDataMessageHeader: 'Customized No Data Message Header',
    noDataMessageBody: 'Customized No Data Message Body'
  };
}
