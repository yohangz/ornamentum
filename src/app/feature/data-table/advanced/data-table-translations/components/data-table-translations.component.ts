import { Component } from '@angular/core';

import {
  demoSnippet,
  translationsUsage,
  translationsNoDataUsage,
  translationsPaginationUsage
} from './data-table-translations.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-translations-component',
  templateUrl: './data-table-translations.component.html',
  styleUrls: ['./data-table-translations.component.scss']
})
export class DataTableTranslationsComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public translationsUsage = translationsUsage;
  public translationsNoDataUsage = translationsNoDataUsage;
  public translationsPaginationUsage = translationsPaginationUsage;
}
