import { Component } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './server-side-data-binding.data';

@Component({
  selector: 'app-server-side-data-binding',
  templateUrl: './server-side-data-binding.component.html'
})
export class ServerSideDataBindingComponent {
  public DataTableSelectMode = DataTableSelectMode;
  public dataSource: Observable<any>;

  constructor() {
    this.dataSource = of(data);
  }
}
