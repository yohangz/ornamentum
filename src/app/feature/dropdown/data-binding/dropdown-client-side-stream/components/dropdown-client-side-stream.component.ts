import { Component } from '@angular/core';

import { FileType } from 'helper-models';

import {
  demoSnippet,
  clientSideStreamUsage
} from './dropdown-client-side-stream.list';

@Component({
  selector: 'app-dropdown-client-side-stream-component',
  templateUrl: './dropdown-client-side-stream.component.html',
  styleUrls: ['./dropdown-client-side-stream.component.scss']
})
export class DropdownClientSideStreamComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public clientSideStreamUsage = clientSideStreamUsage;
}
