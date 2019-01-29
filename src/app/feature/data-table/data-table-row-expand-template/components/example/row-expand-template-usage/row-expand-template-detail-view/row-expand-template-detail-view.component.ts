import { Component, Input, OnInit } from '@angular/core';

import { DataTableRow } from 'ornamentum';

import { Store } from '../../../../../../../shared/models/example-data.model';
import { ExampleData } from '../../../../../../../shared/models';

@Component({
  selector: 'app-row-expand-template-detail-view',
  templateUrl: './row-expand-template-detail-view.component.html'
})
export class RowExpandTemplateDetailViewComponent implements OnInit {
  @Input()
  public row: DataTableRow<ExampleData>;

  public stores: Store[];

  public ngOnInit(): void {
    this.stores = this.row.item.availableStores;
    this.row.dataLoaded = true;
  }
}
