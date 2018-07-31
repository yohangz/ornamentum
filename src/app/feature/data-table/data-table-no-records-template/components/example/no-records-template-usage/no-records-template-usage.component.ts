import { Component } from '@angular/core';

import { DataTableExampleDataModel } from '../../../../../../shared/models';

@Component({
  selector: 'app-no-records-template-usage',
  templateUrl: './no-records-template-usage.component.html'
})
export class NoRecordsTemplateUsageComponent {
  public items: DataTableExampleDataModel[];

  constructor() {
    this.items = [];
  }
}
