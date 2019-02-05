import { Component } from '@angular/core';

import {
  demoSnippet,
  itemsUsage,
  dataSourceUsage,
} from './dropdown-client-side-data-binding.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-client-side-data-binding-component',
  templateUrl: './dropdown-client-side-data-binding.component.html',
  styleUrls: ['./dropdown-client-side-data-binding.component.scss']
})
export class DropdownClientSideDataBindingComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public itemsUsage = itemsUsage;
  public dataSourceUsage = dataSourceUsage;
}
