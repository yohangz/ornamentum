import { Component } from '@angular/core';

import {
  responsiveConfUsage,
  contentHeightUsage,
  expanderColumnWidthUsage,
  indexColumnWidthUsage,
  minContentHeightUsage,
  minContentWidthUsage,
  selectionColumnWidthUsage,
  widthUsage,
  columnSelectorWidthUsage,
} from './data-table-responsive-conf.list';

@Component({
  selector: 'app-data-table-responsive-conf-component',
  templateUrl: './data-table-responsive-conf.component.html',
  styleUrls: ['./data-table-responsive-conf.component.scss']
})
export class DataTableResponsiveConfComponent {
  public responsiveConfUsage = responsiveConfUsage;
  public contentHeightUsage = contentHeightUsage;
  public expanderColumnWidthUsage = expanderColumnWidthUsage;
  public indexColumnWidthUsage = indexColumnWidthUsage;
  public minContentHeightUsage = minContentHeightUsage;
  public minContentWidthUsage = minContentWidthUsage;
  public selectionColumnWidthUsage = selectionColumnWidthUsage;
  public widthUsage = widthUsage;
  public columnSelectorWidthUsage = columnSelectorWidthUsage;
}
