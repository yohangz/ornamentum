import { Component } from '@angular/core';

import { dataPersistenceUsage, demoSnippet, dataPersistenceUsageWithStorageMode } from './data-table-persist-data.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-persist-data-component',
  templateUrl: './data-table-persist-data.component.html',
  styleUrls: ['./data-table-persist-data.component.scss']
})
export class DataTablePersistDataComponent {
  public FileType = FileType;

  public dataPersistenceUsage = dataPersistenceUsage;
  public dataPersistenceUsageWithStorageMode = dataPersistenceUsageWithStorageMode;
  public demoSnippet = demoSnippet;
}
