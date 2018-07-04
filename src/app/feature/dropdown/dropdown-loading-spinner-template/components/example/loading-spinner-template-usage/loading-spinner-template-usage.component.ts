import { Component } from '@angular/core';

import { data } from './loading-spinner-template-usage.data';

@Component({
  selector: 'app-loading-spinner-template-usage',
  templateUrl: './loading-spinner-template-usage.component.html'
})
export class LoadingSpinnerTemplateUsageComponent {
  public items: any[];

  constructor() {
    setTimeout(() => {
      this.items = data;
    }, 5000);
  }
}
