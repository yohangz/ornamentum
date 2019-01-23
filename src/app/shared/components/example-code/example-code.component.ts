import { Component, Input } from '@angular/core';

import { ExampleFile, FileType } from '../../models';

/**
 * Dynamic example demo code viewer controller.
 */
@Component({
  selector: 'app-example-code',
  styleUrls: ['./example-code.component.scss'],
  templateUrl: './example-code.component.html'
})
export class ExampleCodeComponent {
  public FileType = FileType;

  @Input()
  public files: ExampleFile[];
}
