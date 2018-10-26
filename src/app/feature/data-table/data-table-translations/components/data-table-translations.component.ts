import { Component } from '@angular/core';

import {
  dataTableTranslationsUsage,
  dataTableTranslationsNoDataUsage,
  dataTableTranslationsPaginationUsage,
  demoSnippet
} from './data-table-translations.list';

@Component({
  selector: 'app-data-table-translations-component',
  templateUrl: './data-table-translations.component.html',
  styleUrls: ['./data-table-translations.component.scss']
})
export class DataTableTranslationsComponent {
  public translationsUsage = dataTableTranslationsUsage;
  public dataTableTranslationsNoDataUsage = dataTableTranslationsNoDataUsage;
  public dataTableTranslationsPaginationUsage = dataTableTranslationsPaginationUsage;
  public demoSnippet = demoSnippet;
}
