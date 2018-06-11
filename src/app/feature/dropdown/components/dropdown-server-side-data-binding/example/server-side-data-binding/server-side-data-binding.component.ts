import { Component } from '@angular/core';

import { data } from './server-side-data-binding.data';

@Component({
  selector: 'app-server-side-data-binding',
  templateUrl: './server-side-data-binding.component.html'
})
export class ServerSideDataBindingComponent {
  public items: any[];

  constructor() {
    this.items = data;
  }
}
