import { Component } from '@angular/core';

import {
  additionalTranslationsUsage,
  translationsNoDataMessageUsage,
  translationsFilterPlaceholderUsage,
  translationsSelectPlaceholderUsage,
  translationsSelectedItemWrapPlaceholderUsage,
  demoSnippet
} from './dropdown-translations.list';

@Component({
  selector: 'app-dropdown-translations-component',
  templateUrl: './dropdown-translations.component.html',
  styleUrls: ['./dropdown-translations.component.scss']
})
export class DropdownTranslationsComponent {
  public translationsNoDataMessageUsage = translationsNoDataMessageUsage;
  public additionalTranslationsUsage = additionalTranslationsUsage;
  public translationsFilterPlaceholderUsage = translationsFilterPlaceholderUsage;
  public translationsSelectPlaceholderUsage = translationsSelectPlaceholderUsage;
  public translationsSelectedItemWrapPlaceholderUsage = translationsSelectedItemWrapPlaceholderUsage;
  public demoSnippet = demoSnippet;
}
