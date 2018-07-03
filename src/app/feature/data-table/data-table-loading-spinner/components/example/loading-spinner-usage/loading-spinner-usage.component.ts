import { Component } from '@angular/core';

import { data } from './loading-spinner-usage.data';

@Component({
  selector: 'app-loading-spinner-usage',
  templateUrl: './loading-spinner-usage.component.html'
})
export class LoadingSpinnerUsageComponent {
  public items: any[];

  constructor() {
    setTimeout(() => {
      this.items = data;
    }, 3000);
  }
}
