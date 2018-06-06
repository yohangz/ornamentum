import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { data } from './server-side-data-binding.data';

@Component({
  selector: 'app-server-side-data-binding',
  templateUrl: './server-side-data-binding.component.html'
})
export class ServerSideDataBindingComponent {
  public dataSource: Observable<any>;

  constructor() {
    this.dataSource = of(data);
  }
}
