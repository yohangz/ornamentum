import { Component } from '@angular/core';

import { dataTableTranslationsNoDataUsage, dataTableTranslationsPaginationUsage } from './data-table-translations.list';

@Component({
  selector: 'app-data-table-translations-component',
  templateUrl: './data-table-translations.component.html',
  styleUrls: ['./data-table-translations.component.scss']
})
export class DataTableTranslationsComponent {
  public dataTableTranslationsNoDataUsage = dataTableTranslationsNoDataUsage;
  public dataTableTranslationsPaginationUsage = dataTableTranslationsPaginationUsage;
}
