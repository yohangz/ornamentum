import { Component, Input, OnInit } from '@angular/core';

import { DataTableRow } from 'ornamentum';

import { Store } from '../../../../../../../shared/models/example-data.model';
import { ExampleData } from '../../../../../../../shared/models';

@Component({
  selector: 'app-advanced-usage-expandable-detail-view',
  templateUrl: './advanced-usage-expandable-detail-view.component.html'
})
export class AdvancedUsageExpandableDetailViewComponent implements OnInit {
  @Input()
  public row: DataTableRow<ExampleData>;

  public stores: Store[];

  public ngOnInit(): void {
    this.stores = this.row.item.availableStores;
    this.row.dataLoaded = true;
  }
}
