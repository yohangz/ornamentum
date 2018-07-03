import { Component } from '@angular/core';

import { responsiveConfAllUsage, responsiveConfWithoutWidthHeightUsage } from './data-table-responsive-conf.list';

@Component({
  selector: 'app-data-table-responsive-conf-component',
  templateUrl: './data-table-responsive-conf.component.html',
  styleUrls: ['./data-table-responsive-conf.component.scss']
})
export class DataTableResponsiveConfComponent {
  public responsiveConfAllUsage = responsiveConfAllUsage;
  public responsiveConfWithoutWidthHeightUsage = responsiveConfWithoutWidthHeightUsage;
}
