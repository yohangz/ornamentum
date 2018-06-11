import { Component } from '@angular/core';

import { data } from './real-time-data-binding.data';

@Component({
  selector: 'app-real-time-data-binding',
  templateUrl: './real-time-data-binding.component.html'
})
export class RealTimeDataBindingComponent {
  public items: any[];

  constructor() {
    this.items = data;
  }
}
