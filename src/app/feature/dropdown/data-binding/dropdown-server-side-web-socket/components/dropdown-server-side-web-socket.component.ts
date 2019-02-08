import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import { demoSnippet, serverSideWebSocketUsage } from './dropdown-server-side-web-socket.list';

@Component({
  selector: 'app-dropdown-server-side-web-socket-component',
  templateUrl: './dropdown-server-side-web-socket.component.html',
  styleUrls: ['./dropdown-server-side-web-socket.component.scss']
})
export class DropdownServerSideWebSocketComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public serverSideWebSocketUsage = serverSideWebSocketUsage;
}
