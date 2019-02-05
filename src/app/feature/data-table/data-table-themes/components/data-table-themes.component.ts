import { Component } from '@angular/core';

import { demoSnippet } from './data-table-themes.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-themes-component',
  templateUrl: './data-table-themes.component.html',
  styleUrls: ['./data-table-themes.component.scss']
})
export class DataTableThemesComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;
}
