import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ExampleData } from '../../../../../../shared/models';
import { ResourceData } from '../../../../../../shared/models/resource-data.model';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-client-side-data-binding-with-data-source',
  templateUrl: './client-side-data-binding-with-data-source.component.html'
})
export class ClientSideDataBindingWithDataSourceComponent {
  public dataSource: Observable<ExampleData[]>;

  constructor(private dataFetchService: DataFetchService) {
    this.dataSource = this.dataFetchService.fetchExampleDataFromServer().pipe(map((resource: ResourceData<ExampleData[]>) => {
      return resource.data;
    }));
  }
}
