import { Component } from '@angular/core';

import {
  demoSnippet,
  rowExpandTemplateUsage,
  rowExpandTemplateDetailView,
  rowExpandLoadingSpinnerUsage,
  rowExpandLoadingSpinnerDetailView,
  rowExpandOnClickUsage
} from './data-table-row-expand-template.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-data-table-row-expand-template-component',
  templateUrl: './data-table-row-expand-template.component.html',
  styleUrls: ['./data-table-row-expand-template.component.scss']
})
export class DataTableRowExpandTemplateComponent {
  public FileType = FileType;

  public rowExpandTemplateUsage = rowExpandTemplateUsage;
  public rowExpandOnClickUsage = rowExpandOnClickUsage;
  public rowExpandLoadingSpinnerUsage = rowExpandLoadingSpinnerUsage;
  public rowExpandTemplateDetailView = rowExpandTemplateDetailView;
  public rowExpandLoadingSpinnerDetailView = rowExpandLoadingSpinnerDetailView;
  public demoSnippet = demoSnippet;
}
