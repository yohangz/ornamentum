import { Component, Input } from '@angular/core';

import { FileType } from 'helper-models';

/**
 * Code snippet component controller.
 */
@Component({
  selector: 'app-code-snippet',
  styleUrls: ['./code-snippet.component.scss'],
  templateUrl: './code-snippet.component.html'
})
export class CodeSnippetComponent {
  public FileType = FileType;

  @Input()
  public type: FileType;

  @Input()
  public content: string;

  @Input()
  public showLineNumbers = true;
}
