import { Component } from '@angular/core';

import { disablingUsage, demoSnippet } from './dropdown-disabling.list';

import { FileType } from 'helper-models';

@Component({
  selector: 'app-dropdown-disabling-component',
  templateUrl: './dropdown-disabling.component.html',
  styleUrls: ['./dropdown-disabling.component.scss']
})
export class DropdownDisablingComponent {
  public FileType = FileType;

  public disablingUsage = disablingUsage;
  public demoSnippet = demoSnippet;
}
