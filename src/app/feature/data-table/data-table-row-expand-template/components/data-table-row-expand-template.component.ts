import { Component } from '@angular/core';

import {
  demoSnippet,
  rowExpandLoadingSpinnerDetailView,
  rowExpandLoadingSpinnerUsage,
  rowExpandOnClickUsage,
  rowExpandTemplateUsage
} from './data-table-row-expand-template.list';

@Component({
  selector: 'app-data-table-row-expand-template-component',
  templateUrl: './data-table-row-expand-template.component.html',
  styleUrls: ['./data-table-row-expand-template.component.scss']
})
export class DataTableRowExpandTemplateComponent {
  public rowExpandTemplateUsage = rowExpandTemplateUsage;
  public rowExpandOnClickUsage = rowExpandOnClickUsage;
  public rowExpandLoadingSpinnerUsage = rowExpandLoadingSpinnerUsage;
  public rowExpandLoadingSpinnerDetailView = rowExpandLoadingSpinnerDetailView;
  public demoSnippet = demoSnippet;
}
