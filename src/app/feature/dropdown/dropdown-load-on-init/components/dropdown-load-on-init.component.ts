import { Component } from '@angular/core';

import { demoSnippet, loadOnInitUsage } from './dropdown-load-on-init.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-load-on-init-component',
  templateUrl: './dropdown-load-on-init.component.html',
  styleUrls: ['./dropdown-load-on-init.component.scss']
})
export class DropdownLoadOnInitComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public loadOnInitUsage = loadOnInitUsage;
}
