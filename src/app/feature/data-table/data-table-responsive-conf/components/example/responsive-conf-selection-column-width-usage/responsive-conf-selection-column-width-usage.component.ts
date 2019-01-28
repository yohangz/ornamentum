import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-responsive-conf-selection-column-width-usage',
  templateUrl: './responsive-conf-selection-column-width-usage.component.html'
})
export class ResponsiveConfSelectionColumnWidthUsageComponent {
  public items: ExampleData[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchStaticData(0, 20);
  }
}
