import { Component } from '@angular/core';

import { ExampleData } from 'helper-models';

@Component({
  selector: 'app-no-records-template-usage',
  templateUrl: './no-records-template-usage.component.html'
})
export class NoRecordsTemplateUsageComponent {
  public items: ExampleData[];

  constructor() {
    setTimeout(() => {
      this.items = [];
    }, 5000);
  }
}
