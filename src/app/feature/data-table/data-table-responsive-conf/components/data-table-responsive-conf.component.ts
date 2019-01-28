import { Component } from '@angular/core';

import {
  responsiveConfContentHeightUsage,
  responsiveConfExpanderColumnWidthUsage,
  responsiveConfIndexColumnWidthUsage,
  responsiveConfMinHeightUsage,
  responsiveConfMinWidthUsage,
  responsiveConfSelectionColumnWidthUsage,
  responsiveConfUsage,
  responsiveConfWidthUsage,
} from './data-table-responsive-conf.list';

@Component({
  selector: 'app-data-table-responsive-conf-component',
  templateUrl: './data-table-responsive-conf.component.html',
  styleUrls: ['./data-table-responsive-conf.component.scss']
})
export class DataTableResponsiveConfComponent {
  public responsiveConfContentHeightUsage = responsiveConfContentHeightUsage;
  public responsiveConfExpanderColumnWidthUsage = responsiveConfExpanderColumnWidthUsage;
  public responsiveConfIndexColumnWidthUsage = responsiveConfIndexColumnWidthUsage;
  public responsiveConfMinHeightUsage = responsiveConfMinHeightUsage;
  public responsiveConfMinWidthUsage = responsiveConfMinWidthUsage;
  public responsiveConfSelectionColumnWidthUsage = responsiveConfSelectionColumnWidthUsage;
  public responsiveConfUsage = responsiveConfUsage;
  public responsiveConfWidthUsage = responsiveConfWidthUsage;
}
