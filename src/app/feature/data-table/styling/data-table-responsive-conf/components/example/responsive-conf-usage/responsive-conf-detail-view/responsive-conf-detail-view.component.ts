import { Component, Input, OnInit } from '@angular/core';

import { DataTableRow } from 'ornamentum';

import { ExampleData, Store } from 'helper-models';

@Component({
  selector: 'app-responsive-conf-detail-view',
  templateUrl: './responsive-conf-detail-view.component.html'
})
export class ResponsiveConfDetailViewComponent implements OnInit {
  @Input()
  public row: DataTableRow<ExampleData>;

  public stores: Store[];

  public ngOnInit(): void {
    this.stores = this.row.item.availableStores;
    this.row.dataLoaded = true;
  }
}
