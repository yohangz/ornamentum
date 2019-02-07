import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import { demoSnippet, serverSideBasicUsage } from './data-table-server-side-basic.list';

@Component({
  selector: 'app-data-table-server-side-basic-component',
  templateUrl: './data-table-server-side-basic.component.html',
  styleUrls: ['./data-table-server-side-basic.component.scss']
})
export class DataTableServerSideBasicComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public serverSideBasicUsage = serverSideBasicUsage;
}
