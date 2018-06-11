import { Component } from '@angular/core';

import { data } from './client-side-data-binding.data';

@Component({
  selector: 'app-client-side-data-binding',
  templateUrl: './client-side-data-binding.component.html'
})
export class ClientSideDataBindingComponent {
  public items: any[];

  constructor() {
    this.items = data;
  }
}
