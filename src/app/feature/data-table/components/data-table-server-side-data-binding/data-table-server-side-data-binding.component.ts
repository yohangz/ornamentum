import { Component } from '@angular/core';

import { serverSideDataBindingUsage } from './data-table-server-side-data-binding.list';

@Component({
  selector: 'app-data-table-server-side-data-binding-component',
  templateUrl: './data-table-server-side-data-binding.component.html',
  styleUrls: ['./data-table-server-side-data-binding.component.scss']
})
export class DataTableServerSideDataBindingComponent {
  public serverSideDataBindingUsage = serverSideDataBindingUsage;
}
