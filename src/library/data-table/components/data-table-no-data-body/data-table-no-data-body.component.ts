import { Component, Input, TemplateRef } from '@angular/core';

import { DataTableConfigService } from '../../services/data-table-config.service';

@Component({
  selector: 'ng-data-table-no-data-body',
  styleUrls: ['./data-table-no-data-body.component.scss'],
  templateUrl: './data-table-no-data-body.component.html'
})
export class DataTableNoDataBodyComponent {
  @Input()
  public noRecordsTemplate: TemplateRef<any>;

  constructor(public config: DataTableConfigService) {
  }
}
