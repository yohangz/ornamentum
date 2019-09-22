import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import {
  demoSnippet,
  optionsUsage,
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

  public optionsUsage = optionsUsage;
  public dataSourceUsage = dataSourceUsage;
}
