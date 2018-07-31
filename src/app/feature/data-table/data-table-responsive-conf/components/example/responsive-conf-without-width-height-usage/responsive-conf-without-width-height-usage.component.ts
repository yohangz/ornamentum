import { Component } from '@angular/core';

import { ExampleDataModel } from '../../../../../../shared/models';

import { TableDataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-responsive-conf-without-width-height-usage',
  templateUrl: './responsive-conf-without-width-height-usage.component.html'
})
export class ResponsiveConfWithoutWidthHeightUsageComponent {
  public items: ExampleDataModel[];

  constructor(private tableDataFetchService: TableDataFetchService) {
    this.items = this.tableDataFetchService.getTableData();
  }
}
