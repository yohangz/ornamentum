import { Component } from '@angular/core';

import { demoSnippet, serverSideDataBindingUsage } from './data-table-server-side-data-binding.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-server-side-data-binding-component',
  templateUrl: './data-table-server-side-data-binding.component.html',
  styleUrls: ['./data-table-server-side-data-binding.component.scss']
})
export class DataTableServerSideDataBindingComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public serverSideDataBindingUsage = serverSideDataBindingUsage;
}
