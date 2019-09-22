import { Component } from '@angular/core';

import { DropdownTranslations } from 'ornamentum';

@Component({
  selector: 'app-translations-no-data-message-usage',
  templateUrl: './translations-no-data-message-usage.component.html'
})
export class TranslationsNoDataMessageUsageComponent {
  public options: any[];

  public dropdownTranslations: DropdownTranslations = {
    noDataMessage: 'Customized No Data Message'
  };

  constructor() {
    this.options = [];
  }
}
