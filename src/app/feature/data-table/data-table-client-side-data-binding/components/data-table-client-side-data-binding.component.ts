import { Component } from '@angular/core';

import {
  clientSideDataBindingWithDataSourceUsage,
  clientSideDataBindingWithItemsUsage,
  demoSnippet
} from './data-table-client-side-data-binding.list';

@Component({
  selector: 'app-data-table-client-side-data-binding-component',
  templateUrl: './data-table-client-side-data-binding.component.html',
  styleUrls: ['./data-table-client-side-data-binding.component.scss']
})
export class DataTableClientSideDataBindingComponent {
  public clientSideDataBindingWithItemsUsage = clientSideDataBindingWithItemsUsage;
  public clientSideDataBindingWithDataSourceUsage = clientSideDataBindingWithDataSourceUsage;
  public demoSnippet = demoSnippet;
}
