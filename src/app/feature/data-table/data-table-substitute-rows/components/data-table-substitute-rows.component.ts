import { Component } from '@angular/core';
import { withSubstituteRowsUsage, withoutSubstituteRowsUsage } from './data-table-substitute-rows.list';

@Component({
  selector: 'app-data-table-substitute-rows-component',
  templateUrl: './data-table-substitute-rows.component.html',
  styleUrls: ['./data-table-substitute-rows.component.scss']
})
export class DataTableSubstituteRowsComponent {
  public withSubstituteRowsUsage = withSubstituteRowsUsage;
  public withoutSubstituteRowsUsage = withoutSubstituteRowsUsage;
}
