import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-server-side-data-binding',
  templateUrl: './server-side-data-binding.component.html'
})
export class ServerSideDataBindingComponent {
  public dataSource: Observable<ExampleData[]>;

  constructor(private dataFetchService: DataFetchService) {
    const data: ExampleData[] = this.dataFetchService.fetchData();
    this.dataSource = of(data);
  }
}
