import { Component } from '@angular/core';

import { demoSnippet, clientSideStreamUsage } from './data-table-client-side-stream.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-client-side-stream-component',
  templateUrl: './data-table-client-side-stream.component.html',
  styleUrls: ['./data-table-client-side-stream.component.scss']
})
export class DataTableClientSideStreamComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public clientSideStreamUsage = clientSideStreamUsage;
}
