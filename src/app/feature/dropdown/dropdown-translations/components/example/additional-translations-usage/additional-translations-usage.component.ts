import { Component } from '@angular/core';

import { DropdownSelectMode, DropdownTranslations } from 'ornamentum';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

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

  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }
}
