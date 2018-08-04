import { Component, ElementRef, Input } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-real-time-data-binding',
  templateUrl: './real-time-data-binding.component.html'
})
export class RealTimeDataBindingComponent {
  public dataSource: Observable<any>;

  constructor(private dataFetchService: DataFetchService) {
    this.dataSource = of(this.dataFetchService.fetchData());
  }
}
