import { Component } from '@angular/core';

import { demoSnippet, serverSideDataBindingUsage } from './dropdown-server-side-data-binding.list';

@Component({
  selector: 'app-dropdown-server-side-data-binding-component',
  templateUrl: './dropdown-server-side-data-binding.component.html',
  styleUrls: ['./dropdown-server-side-data-binding.component.scss']
})
export class DropdownServerSideDataBindingComponent {
  public serverSideDataBindingUsage = serverSideDataBindingUsage;
  public demoSnippet = demoSnippet;
}
