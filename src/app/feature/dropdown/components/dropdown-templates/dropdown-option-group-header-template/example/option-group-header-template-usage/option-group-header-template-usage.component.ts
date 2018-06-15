import { Component } from '@angular/core';

import { data } from './option-group-header-template-usage.data';

@Component({
  selector: 'app-option-group-header-template-usage',
  templateUrl: './option-group-header-template-usage.component.html'
})
export class OptionGroupHeaderTemplateUsageComponent {
  public items: any[];

  constructor() {
    this.items = data;
  }
}
