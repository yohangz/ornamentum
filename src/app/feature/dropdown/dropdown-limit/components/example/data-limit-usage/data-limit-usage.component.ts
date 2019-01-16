import { Component } from '@angular/core';

import { ExampleData } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DropdownTranslations } from '../../../../../../../../projects/ornamentum/src';

@Component({
  selector: 'app-data-limit-usage',
  templateUrl: './data-limit-usage.component.html'
})
export class DataLimitUsageComponent {
  public dataSource: Observable<ExampleData[]>;
  public translations: DropdownTranslations = {
    noDataMessage: 'No Data Available.'
  };

  constructor(private dataFetchService: DataFetchService) {
    this.dataSource = this.dataFetchService.fetchDataFromServer(0, 20).pipe(map((resource) => {
      return resource.data;
    }));
  }
}
