import { Component } from '@angular/core';

import { DropdownSelectMode, DropdownTranslations } from 'ornamentum';

import { data } from './additional-translations-usage.data';

@Component({
  selector: 'app-additional-translations-usage',
  templateUrl: './additional-translations-usage.component.html'
})
export class AdditionalTranslationsUsageComponent {
  public DropdownSelectMode = DropdownSelectMode;

  public dropdownTranslations: DropdownTranslations = {
    filterPlaceholder: 'This is filter place holder',
    selectedItemWrapPlaceholder: 'Wrapped Items',
    selectPlaceholder: 'This is select place holder'
  };

  public items: any[];

  constructor() {
    this.items = data;
  }
}
