import { Component } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-client-side-data-binding-with-data-source',
  templateUrl: './client-side-data-binding-with-data-source.component.html'
})
export class ClientSideDataBindingWithDataSourceComponent {
  public dataSource: Observable<ExampleData[]>;

  constructor(private dataFetchService: DataFetchService) {
    this.dataSource = of(this.dataFetchService.fetchStaticData(0, 20));
  }
}
