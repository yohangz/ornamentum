import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import { demoSnippet, serverSideBasicUsage } from './dropdown-server-side-basic.list';

@Component({
  selector: 'app-dropdown-server-side-basic-component',
  templateUrl: './dropdown-server-side-basic.component.html',
  styleUrls: ['./dropdown-server-side-basic.component.scss']
})
export class DropdownServerSideBasicComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public serverSideBasicUsage = serverSideBasicUsage;
}
