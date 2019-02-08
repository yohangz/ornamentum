import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import { demoSnippet, loadDataOnInitUsage } from './dropdown-load-data-on-init.list';

@Component({
  selector: 'app-dropdown-load-data-on-init-component',
  templateUrl: './dropdown-load-data-on-init.component.html',
  styleUrls: ['./dropdown-load-data-on-init.component.scss']
})
export class DropdownLoadDataOnInitComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public loadDataOnInitUsage = loadDataOnInitUsage;
}
