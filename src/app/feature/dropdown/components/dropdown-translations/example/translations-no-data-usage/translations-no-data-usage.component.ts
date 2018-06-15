import { Component } from '@angular/core';

import { DropdownTranslations } from 'ornamentum';

@Component({
  selector: 'app-translations-no-data-usage',
  templateUrl: './translations-no-data-usage.component.html'
})
export class TranslationsNoDataUsageComponent {
  public dropdownTranslations: DropdownTranslations = {
    noDataMessage: 'Customized No Data Message'
  };

  public items: any[];

  constructor() {
    this.items = [];
  }
}
