import { Component } from '@angular/core';

import { demoSnippet, withoutSubstituteRowsUsage, withSubstituteRowsUsage } from './data-table-substitute-rows.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-substitute-rows-component',
  templateUrl: './data-table-substitute-rows.component.html',
  styleUrls: ['./data-table-substitute-rows.component.scss']
})
export class DataTableSubstituteRowsComponent {
  public FileType = FileType;

  public withSubstituteRowsUsage = withSubstituteRowsUsage;
  public withoutSubstituteRowsUsage = withoutSubstituteRowsUsage;
  public demoSnippet = demoSnippet;
}
