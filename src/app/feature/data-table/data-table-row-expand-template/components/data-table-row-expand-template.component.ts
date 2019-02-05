import { Component } from '@angular/core';

import {
  demoSnippet,
  rowExpandTemplateUsage,
  rowExpandTemplateDetailView,
  showRowExpandLoadingSpinnerUsage,
  showRowExpandLoadingSpinnerDetailView,
  expandOnRowClickUsage
} from './data-table-row-expand-template.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-row-expand-template-component',
  templateUrl: './data-table-row-expand-template.component.html',
  styleUrls: ['./data-table-row-expand-template.component.scss']
})
export class DataTableRowExpandTemplateComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public rowExpandTemplateUsage = rowExpandTemplateUsage;
  public rowExpandTemplateDetailView = rowExpandTemplateDetailView;
  public expandOnRowClickUsage = expandOnRowClickUsage;
  public showRowExpandLoadingSpinnerUsage = showRowExpandLoadingSpinnerUsage;
  public showRowExpandLoadingSpinnerDetailView = showRowExpandLoadingSpinnerDetailView;
}
