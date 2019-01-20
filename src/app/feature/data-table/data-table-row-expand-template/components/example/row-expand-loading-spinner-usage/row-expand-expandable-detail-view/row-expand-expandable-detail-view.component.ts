import { Component, Input, OnInit } from '@angular/core';

import { DataTableRow } from 'ornamentum';

import { ExampleData } from '../../../../../../../shared/models';

@Component({
  selector: 'app-expand-expandable-detail-view',
  templateUrl: './row-expand-expandable-detail-view.component.html'
})
export class RowExpandExpandableDetailViewComponent implements OnInit {
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
