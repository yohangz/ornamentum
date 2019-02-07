import { Component } from '@angular/core';

import {
  demoSnippet,
  statePersistenceUsage,
  storageModeUsage
} from './data-table-state-persistence.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-state-persistence-component',
  templateUrl: './data-table-state-persistence.component.html',
  styleUrls: ['./data-table-state-persistence.component.scss']
})
export class DataTableStatePersistenceComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public statePersistenceUsage = statePersistenceUsage;
  public storageModeUsage = storageModeUsage;
}
