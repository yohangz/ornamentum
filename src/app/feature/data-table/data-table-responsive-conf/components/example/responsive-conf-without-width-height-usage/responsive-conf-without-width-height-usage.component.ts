import { Component } from '@angular/core';

import { DataTableExampleDataModel } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-responsive-conf-without-width-height-usage',
  templateUrl: './responsive-conf-without-width-height-usage.component.html'
})
export class ResponsiveConfWithoutWidthHeightUsageComponent {
  public items: DataTableExampleDataModel[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.getTableData();
  }
}
