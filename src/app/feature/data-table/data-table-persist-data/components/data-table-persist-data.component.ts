import { Component } from '@angular/core';

import { dataPersistenceUsage } from './data-table-persist-data.list';

@Component({
  selector: 'app-data-table-persist-data-component',
  templateUrl: './data-table-persist-data.component.html',
  styleUrls: ['./data-table-persist-data.component.scss']
})
export class DataTablePersistDataComponent {
  public dataPersistenceUsage = dataPersistenceUsage;
}
