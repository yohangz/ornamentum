import { Component } from '@angular/core';

import { demoSnippet } from './data-table-overview.list';

import { VERSION } from '../../../../../environments/version';

import { FileType } from 'helper-models';

/**
 * Data table overview component controller.
 */
@Component({
  selector: 'app-data-table-overview-component',
  templateUrl: './data-table-overview.component.html',
  styleUrls: ['./data-table-overview.component.scss']
})
export class DataTableOverviewComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;
  public packageVersion = VERSION;
}
