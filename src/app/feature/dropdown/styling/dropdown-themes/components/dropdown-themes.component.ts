import { Component } from '@angular/core';

import { demoSnippet } from './dropdown-themes.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-themes-component',
  templateUrl: './dropdown-themes.component.html',
  styleUrls: ['./dropdown-themes.component.scss']
})
export class DropdownThemesComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;
}
