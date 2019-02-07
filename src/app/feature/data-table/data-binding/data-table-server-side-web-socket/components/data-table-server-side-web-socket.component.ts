import { Component } from '@angular/core';

import { demoSnippet, serverSideWebSocketUsage } from './data-table-server-side-web-socket.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-server-side-web-socket-component',
  templateUrl: './data-table-server-side-web-socket.component.html',
  styleUrls: ['./data-table-server-side-web-socket.component.scss']
})
export class DataTableServerSideWebSocketComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public serverSideWebSocketUsage = serverSideWebSocketUsage;
}
