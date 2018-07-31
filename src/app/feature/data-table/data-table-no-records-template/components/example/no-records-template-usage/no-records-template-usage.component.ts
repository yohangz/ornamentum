import { Component } from '@angular/core';

import { ExampleDataModel } from '../../../../../../shared/models';

@Component({
  selector: 'app-no-records-template-usage',
  templateUrl: './no-records-template-usage.component.html'
})
export class NoRecordsTemplateUsageComponent {
  public items: ExampleDataModel[];

  constructor() {
    this.items = [];
  }
}
