import { Component } from '@angular/core';

import { demoSnippet } from './data-table-styling-and-themes.list';

@Component({
  selector: 'app-data-table-styling-and-themes-component',
  templateUrl: './data-table-styling-and-themes.component.html',
  styleUrls: ['./data-table-styling-and-themes.component.scss']
})
export class DataTableStylingAndThemesComponent {
  public demoSnippet = demoSnippet;
}
