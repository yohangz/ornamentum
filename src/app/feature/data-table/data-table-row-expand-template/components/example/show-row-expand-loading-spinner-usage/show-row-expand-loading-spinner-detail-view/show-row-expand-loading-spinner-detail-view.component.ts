import { Component, Input, OnInit } from '@angular/core';

import { DataTableRow } from 'ornamentum';

import { ExampleData } from 'helper-models';

@Component({
  selector: 'app-show-row-expand-loading-spinner-detail-view',
  templateUrl: './show-row-expand-loading-spinner-detail-view.component.html'
})
export class ShowRowExpandLoadingSpinnerDetailViewComponent implements OnInit {
  @Input()
  public row: DataTableRow<ExampleData>;

  public rowDetails: string;

  public ngOnInit(): void {
    setTimeout(() => {
      this.rowDetails = this.row.item.product;
      this.row.dataLoaded = true;
    }, 2000);
  }
}
