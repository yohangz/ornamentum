import { Component } from '@angular/core';

import { demoSnippet, serverSideDataBindingUsage } from './dropdown-server-side-data-binding.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-server-side-data-binding-component',
  templateUrl: './dropdown-server-side-data-binding.component.html',
  styleUrls: ['./dropdown-server-side-data-binding.component.scss']
})
export class DropdownServerSideDataBindingComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public serverSideDataBindingUsage = serverSideDataBindingUsage;
}
