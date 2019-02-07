import { Component } from '@angular/core';

import { VERSION } from '../../../../../../environments/version';

import { FileType } from 'helper-models';

import { demoSnippet } from './data-table-basic-usage.list';

/**
 * Data table basic usage component controller.
 */
@Component({
  selector: 'app-data-table-basic-usage-component',
  templateUrl: './data-table-basic-usage.component.html',
  styleUrls: ['./data-table-basic-usage.component.scss']
})
export class DataTableBasicUsageComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public packageVersion = VERSION;
}
