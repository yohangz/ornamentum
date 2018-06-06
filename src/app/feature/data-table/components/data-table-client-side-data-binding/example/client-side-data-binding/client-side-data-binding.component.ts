import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './client-side-data-binding.data';

@Component({
  selector: 'app-client-side-data-binding',
  templateUrl: './client-side-data-binding.component.html'
})
export class ClientSideDataBindingComponent {
  public DataTableSelectMode = DataTableSelectMode;
  public items: Observable<any>;

  constructor() {
    this.items = of(data);
  }
}
