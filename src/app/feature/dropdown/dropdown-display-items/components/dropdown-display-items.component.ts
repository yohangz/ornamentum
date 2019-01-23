import { Component } from '@angular/core';

import { displayItemsUsage, demoSnippet } from './dropdown-display-items.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-display-items-component',
  templateUrl: './dropdown-display-items.component.html',
  styleUrls: ['./dropdown-display-items.component.scss']
})
export class DropdownDisplayItemsComponent {
  public FileType = FileType;

  public displayTrackedByUsage = displayItemsUsage;
  public demoSnippet = demoSnippet;
}
