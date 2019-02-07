import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import { demoSnippet } from './data-table-themes.list';

@Component({
  selector: 'app-data-table-themes-component',
  templateUrl: './data-table-themes.component.html',
  styleUrls: ['./data-table-themes.component.scss']
})
export class DataTableThemesComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;
}
