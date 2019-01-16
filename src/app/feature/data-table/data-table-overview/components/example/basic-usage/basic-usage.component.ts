import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ResourceData } from '../../../../../../shared/models/resource-data.model';
import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-basic-usage',
  templateUrl: './basic-usage.component.html'
})
export class BasicUsageComponent {
  public dataSource: Observable<ExampleData[]>;

  constructor(private dataFetchService: DataFetchService) {
    this.dataSource = this.dataFetchService.fetchDataFromServer().pipe(map((resource: ResourceData<ExampleData>) => {
      return resource.data;
    }));
  }
}
