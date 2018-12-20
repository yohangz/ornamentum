import { Component } from '@angular/core';

import { clientSideDataBindingUsage, demoSnippet } from './dropdown-client-side-data-binding.list';

@Component({
  selector: 'app-dropdown-client-side-data-binding-component',
  templateUrl: './dropdown-client-side-data-binding.component.html',
  styleUrls: ['./dropdown-client-side-data-binding.component.scss']
})
export class DropdownClientSideDataBindingComponent {
  public clientSideDataBindingUsage = clientSideDataBindingUsage;
  public demoSnippet = demoSnippet;
}
