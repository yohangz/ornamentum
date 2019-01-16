import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ExampleData } from '../../../../../../shared/models';
import { ResourceData } from '../../../../../../shared/models/resource-data.model';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-server-side-data-binding',
  templateUrl: './server-side-data-binding.component.html'
})
export class ServerSideDataBindingComponent {
  public dataSource: Observable<ExampleData[]>;

  constructor(private dataFetchService: DataFetchService) {
    this.dataSource = this.dataFetchService.fetchDataFromServer().pipe(map((resource: ResourceData<ExampleData>) => {
      return resource.data;
    }));
  }
}
