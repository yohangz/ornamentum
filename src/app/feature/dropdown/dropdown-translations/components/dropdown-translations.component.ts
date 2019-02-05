import { Component } from '@angular/core';

import {
  demoSnippet,
  additionalTranslationsUsage,
  translationsNoDataMessageUsage,
  translationsFilterPlaceholderUsage,
  translationsSelectPlaceholderUsage,
  translationsSelectedItemWrapPlaceholderUsage
} from './dropdown-translations.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-translations-component',
  templateUrl: './dropdown-translations.component.html',
  styleUrls: ['./dropdown-translations.component.scss']
})
export class DropdownTranslationsComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public translationsNoDataMessageUsage = translationsNoDataMessageUsage;
  public additionalTranslationsUsage = additionalTranslationsUsage;
  public translationsFilterPlaceholderUsage = translationsFilterPlaceholderUsage;
  public translationsSelectPlaceholderUsage = translationsSelectPlaceholderUsage;
  public translationsSelectedItemWrapPlaceholderUsage = translationsSelectedItemWrapPlaceholderUsage;
}
