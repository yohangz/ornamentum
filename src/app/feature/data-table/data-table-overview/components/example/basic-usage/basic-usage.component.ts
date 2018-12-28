import { Component } from '@angular/core';

import { Observable, of } from 'rxjs';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-basic-usage',
  templateUrl: './basic-usage.component.html'
})
export class BasicUsageComponent {
  public dataSource: Observable<any>;

  constructor(private dataFetchService: DataFetchService) {
    this.dataSource = of(this.dataFetchService.fetchData());
  }
}
