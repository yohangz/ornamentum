import { Component } from '@angular/core';

import { data } from './option-template-usage.data';

@Component({
  selector: 'app-option-template-usage',
  templateUrl: './option-template-usage.component.html'
})
export class OptionTemplateUsageComponent {
  public items: any[];

  constructor() {
    this.items = data;
  }
}
