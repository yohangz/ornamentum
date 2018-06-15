import { Component } from '@angular/core';

import { additionalTranslationsUsage, translationsNoDataUsage } from './dropdown-translations.list';

@Component({
  selector: 'app-dropdown-translations-component',
  templateUrl: './dropdown-translations.component.html',
  styleUrls: ['./dropdown-translations.component.scss']
})
export class DropdownTranslationsComponent {
  public translationsNoDataUsage = translationsNoDataUsage;
  public additionalTranslationsUsage = additionalTranslationsUsage;
}
