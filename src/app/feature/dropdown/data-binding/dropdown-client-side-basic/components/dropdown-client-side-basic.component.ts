import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import {
  demoSnippet,
  itemsUsage,
  dataSourceUsage,
} from './dropdown-client-side-basic.list';

@Component({
  selector: 'app-dropdown-client-side-basic-component',
  templateUrl: './dropdown-client-side-basic.component.html',
  styleUrls: ['./dropdown-client-side-basic.component.scss']
})
export class DropdownClientSideBasicComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public itemsUsage = itemsUsage;
  public dataSourceUsage = dataSourceUsage;
}
