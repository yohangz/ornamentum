import { Component } from '@angular/core';

import { demoSnippet } from '../../../data-table/data-table-styling-and-themes/components/data-table-styling-and-themes.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-styling-and-themes-component',
  templateUrl: './dropdown-styling-and-themes.component.html',
  styleUrls: ['./dropdown-styling-and-themes.component.scss']
})
export class DropdownStylingAndThemesComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;
}
